import { createSelector } from 'reselect'

import calcNextCurrentIndex from '~utils/calcNextCurrentIndex'
import calcPreviousCurrentIndex from '~utils/calcPreviousCurrentIndex'
import withIpfsGateway from '~utils/withIpfsGateway'

import {
  getAppStartProgress,
  getFeedAlbums,
  getDiscoverSelectedAlbums,
  getDiscoverSearchValue,
  getSharedFiles,
  getCurrentTrackIndex,
  getPlaylistLastTrackIndex,
  getPlaylistTracksByIndex,
  getPlaylistRemovedByIndex
} from '#selectors'

export const isAppReady = state => getAppStartProgress(state) === 100

export const getCurrentTrackSource = state => {
  const track = getCurrentTrack(state)
  return withIpfsGateway(track.cid)
}

export const isPlayerActive = state => {
  return getCurrentTrackIndex(state) !== null
}

export const isFeedHasAlbums = state => getFeedAlbums(state).length !== 0
export const getSelectedFeedAlbumsCount = state => getDiscoverSelectedAlbums(state).length
export const isFeedAlbumsSelected = state => getDiscoverSelectedAlbums(state).length !== 0
export const isFeedSearchPerformed = state => !!getDiscoverSearchValue(state).searchValue

export const isSharingInProcess = state => !!getSharedFiles(state)

export const isPlaylistEmpty = state => !getPlaylistLastTrackIndex(state)

export const getCurrentTrack = state => {
  return getPlaylistTracksByIndex(state)[getCurrentTrackIndex(state)]
}

export const getNextTrackIndex = createSelector(
  [
    getCurrentTrackIndex, getPlaylistRemovedByIndex
  ],
  (currentTrackIndex, removedByIndex) => calcNextCurrentIndex({ currentTrackIndex, removedByIndex })
)

export const getPreviousTrackIndex = createSelector(
  [
    getCurrentTrackIndex, getPlaylistRemovedByIndex
  ],
  (currentTrackIndex, removedByIndex) => calcPreviousCurrentIndex({ currentTrackIndex, removedByIndex })
)
