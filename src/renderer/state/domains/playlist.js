
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
  tracksLength: null,
  removedByIndex: {},
  removedLength: null,
  cachedByCid: {},
  currentTrackIndex: null,
  lastTrackIndex: null,
  shuffleOrder: null,
  isRepeat: false,
  isShuffle: false
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

const toShuffleOrder = (tracksByIndex, currentTrackIndex) => {
  const shuffleOrder = Object.keys(tracksByIndex)
  const withoutCurrent = shuffleOrder.filter(key => key !== currentTrackIndex)
  withoutCurrent.sort((a, b) => {
    if (getRandomBoolean()) {
      return -1
    }
    return 1
  })
  withoutCurrent.unshift(currentTrackIndex)
  return withoutCurrent
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemPlayedTracksRecieved.toString(): {
      const tracksByIndex = toTracksByIndex(payload)
      const tracksLength = Object.keys(tracksByIndex).length
      let shuffleOrder = null
      let currentTrackIndex = '0'
      if (state.isShuffle) {
        shuffleOrder = toShuffleOrder(tracksByIndex)
        currentTrackIndex = shuffleOrder[0]
      }
      return {
        ...initialState,
        tracksByIndex,
        tracksLength,
        shuffleOrder,
        currentTrackIndex,
        lastTrackIndex: payload.length - 1,
        isRepeat: state.isRepeat,
        isShuffle: state.isShuffle
      }
    }
    case systemQueuedTracksRecieved.toString(): {
      const newTracksByIndex = toTracksByIndex(payload, state.lastTrackIndex)
      const tracksByIndex = { ...state.tracksByIndex, ...newTracksByIndex }
      const tracksLength = Object.keys(tracksByIndex).length
      let shuffleOrder = null
      if (state.isShuffle) {
        shuffleOrder = toShuffleOrder(tracksByIndex, state.currentTrackIndex)
      }
      return {
        ...state,
        tracksByIndex,
        tracksLength,
        shuffleOrder,
        lastTrackIndex: state.lastTrackIndex + payload.length - 1
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
      let newCurrentIndex = state.currentTrackIndex
      if (newCurrentIndex === payload) {
        newCurrentIndex = calcNextTrackIndex(state)
      }
      const removedByIndex = {
        ...state.removedByIndex,
        [payload]: true
      }
      const removedLength = Object.keys(removedByIndex).length
      return {
        ...state,
        removedByIndex,
        removedLength,
        currentTrackIndex: newCurrentIndex
      }
    }
    case uiPlaylistTrackPlayed.toString(): {
      let shuffleOrder = null
      if (state.isShuffle) {
        shuffleOrder = toShuffleOrder(state.tracksByIndex, payload)
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
    case uiRepeatToggled.toString():
      return {
        ...state,
        isRepeat: !state.isRepeat
      }
    case uiShuffleToggled.toString():
      if (state.isShuffle) {
        return { ...state, shuffleOrder: null, isShuffle: false }
      } else {
        const shuffleOrder = toShuffleOrder(state.tracksByIndex, state.currentTrackIndex)
        return {
          ...state,
          shuffleOrder,
          isShuffle: true
        }
      }
    case uiPlaylistCleared.toString():
      return {
        ...initialState,
        isRepeat: state.isRepeat,
        isShuffle: state.isShuffle
      }
    default:
      return state
  }
}

export default reducer
