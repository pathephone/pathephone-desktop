
import {
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
  systemAudioEnded,
  systemTrackCached
} from '#actions-system'

import {
  uiPlaylistTrackRemoved,
  uiPlaylistCleared,
  uiPlaylistTrackPlayed,
  uiNextTrackPlayed,
  uiPreviousTrackPlayed,
  uiRepeatToggled,
  uiShuffleToggled
} from '#actions-ui'

import calcNextTrackIndex from '~utils/calcNextTrackIndex'
import calcPreviousTrackIndex from '~utils/calcPreviousTrackIndex'
import getRandomBoolean from '~utils/getRandomBoolean'

const DOMAIN = 'playlist'

const initialState = {
  tracksByIndex: {},
  cachedByCid: {},
  removedByIndex: {},
  currentTrackIndex: null,
  shuffleOrder: null,
  isRepeat: false
}

export const getPlaylistTracksByIndex = state => state[DOMAIN].tracksByIndex
export const getPlaylistCachedByCid = state => state[DOMAIN].cachedByCid
export const getPlaylistRemovedByIndex = state => state[DOMAIN].removedByIndex
export const getCurrentTrackIndex = state => state[DOMAIN].currentTrackIndex
export const isShuffleTurnedOn = state => !!state[DOMAIN].shuffleOrder
export const isRepeatTurnedOn = state => state[DOMAIN].isRepeat

const toTracksByIndex = (tracks, startIndex) => {
  let lastTrackIndex = startIndex || -1
  return tracks.reduce((acc, { cid, title, artist }) => {
    const index = ++lastTrackIndex
    acc[index] = {
      cid, title, artist
    }
    return acc
  }, {})
}

const toShuffleOrder = (tracksByIndex) => {
  const shuffleOrder = Object.keys(tracksByIndex)
  shuffleOrder.sort(() => {
    if (getRandomBoolean()) {
      return 1
    }
    return 0
  })
  return shuffleOrder
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemPlayedTracksRecieved.toString(): {
      const tracksByIndex = toTracksByIndex(payload)
      return {
        ...initialState,
        tracksByIndex,
        currentTrackIndex: '0',
        isRepeat: state.isRepeat
      }
    }
    case systemQueuedTracksRecieved.toString(): {
      const newTracksByIndex = toTracksByIndex(payload, state.lastTrackIndex)
      const tracksByIndex = { ...state.tracksByIndex, ...newTracksByIndex }
      return {
        ...state,
        tracksByIndex
      }
    }
    case uiNextTrackPlayed.toString():
    case systemAudioEnded.toString(): {
      const newCurrentIndex = calcNextTrackIndex(state)
      return {
        ...state,
        currentTrackIndex: newCurrentIndex
      }
    }
    case uiPreviousTrackPlayed.toString(): {
      const newCurrentIndex = calcPreviousTrackIndex(state)
      return {
        ...state,
        currentTrackIndex: newCurrentIndex
      }
    }
    case uiPlaylistTrackRemoved.toString(): {
      return {
        ...state,
        removedByIndex: {
          ...state.removedByIndex,
          [payload]: true
        }
      }
    }
    case uiPlaylistTrackPlayed.toString(): {
      let shuffleOrder = null
      if (state.shuffleOrder) {
        shuffleOrder = toShuffleOrder(state.tracksByIndex)
        shuffleOrder.sort(a => {
          if (a === payload) return -1
          return 1
        })
      }
      return {
        ...state,
        currentTrackIndex: payload,
        shuffleOrder
      }
    }
    case systemTrackCached.toString():
      return {
        ...state,
        cachedByCid: {
          ...state.cachedByCid,
          [payload]: true
        }
      }
    case uiPlaylistCleared.toString():
      return {
        ...initialState,
        isRepeat: state.isRepeat,
        isShuffle: state.isShuffle
      }
    case uiRepeatToggled.toString():
      return {
        ...state,
        isRepeat: !state.isRepeat
      }
    case uiShuffleToggled.toString():
      if (state.shuffleOrder) {
        return { ...state, shuffleOrder: null }
      } else {
        const shuffleOrder = toShuffleOrder(state.tracksByIndex)
        return {
          ...state,
          shuffleOrder,
          currentTrackIndex: shuffleOrder[0]
        }
      }
    default:
      return state
  }
}

export default reducer
