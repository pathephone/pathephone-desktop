
import {
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
  systemAudioEnded,
  systemTrackCached
} from '#actions-system'

import {
  uiPlaylistTrackRemoved,
  uiPlaylistCleared,
  uiPlaylistTrackPlayed
} from '#actions-ui'

import calcNextCurrentIndex from '~utils/calcNextCurrentIndex'

const DOMAIN = 'playlist'

const initialState = {
  tracksByIndex: {},
  cachedByCid: {},
  removedByIndex: {},
  lastTrackIndex: null,
  currentTrackIndex: null
}

export const getPlaylistTracksByIndex = state => state[DOMAIN].tracksByIndex
export const getPlaylistCachedByCid = state => state[DOMAIN].cachedByCid
export const getPlaylistRemovedByIndex = state => state[DOMAIN].removedByIndex
export const getCurrentTrackIndex = state => state[DOMAIN].currentTrackIndex
export const getPlaylistLastTrackIndex = state => state[DOMAIN].lastTrackIndex

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemPlayedTracksRecieved.toString(): {
      const tracksByIndex = payload.reduce((acc, { cid, title, artist }, index) => {
        acc[index] = { cid, title, artist, index }
        return acc
      }, {})
      return {
        ...initialState,
        tracksByIndex,
        lastTrackIndex: payload.length - 1,
        currentTrackIndex: 0
      }
    }
    case systemQueuedTracksRecieved.toString(): {
      let { lastTrackIndex } = state
      if (!lastTrackIndex) lastTrackIndex = -1
      const tracksByIndex = payload.reduce((acc, { cid, title, artist }) => {
        const index = ++lastTrackIndex
        acc[index] = { cid, title, artist, index }
        return acc
      }, {})
      return {
        ...state,
        tracksByIndex: { ...state.tracksByIndex, ...tracksByIndex },
        lastTrackIndex
      }
    }
    case systemAudioEnded.toString(): {
      const nextCurrentIndex = calcNextCurrentIndex(state)
      return {
        ...state,
        currentTrackIndex: nextCurrentIndex
      }
    }
    case uiPlaylistTrackRemoved.toString(): {
      let nextCurrentIndex = state.currentTrackIndex
      if (nextCurrentIndex === payload) {
        nextCurrentIndex = calcNextCurrentIndex(state)
      }
      return {
        ...state,
        currentTrackIndex: nextCurrentIndex,
        removedByIndex: {
          ...state.removedByIndex,
          [payload]: true
        }
      }
    }
    case uiPlaylistTrackPlayed.toString():
      return {
        ...state,
        currentTrackIndex: payload
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
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
