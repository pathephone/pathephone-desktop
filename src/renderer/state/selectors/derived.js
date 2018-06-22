import path from 'path'
import { createSelector } from 'reselect'

import {
  getAppStartProgress,
  getDiscoverFeedAlbums,
  getDiscoverSelectedIds,
  getDiscoverSearchValue,
  getCurrentTrackIndex,
  getPlaylistTracksByIndex,
  getShareCandidates,
  getNotifications,
  getIpfsGateway
} from '#selectors'

export const isAppReady = state => getAppStartProgress(state) === 100

export const getCurrentTrack = state => {
  const index = getCurrentTrackIndex(state)
  if (index !== null) {
    return getPlaylistTracksByIndex(state)[index]
  }
}

export const getCurrentTrackSource = state => {
  const track = getCurrentTrack(state)
  const gateway = getIpfsGateway(state)
  return `${gateway}/ipfs/${track.cid}`
}

export const isPlayerActive = state => {
  return getCurrentTrackIndex(state) !== null
}

export const isShareCandidatesRecieved = state => getShareCandidates(state).length > 0

export const getPlaylistTracksIndexes = createSelector(
  getPlaylistTracksByIndex,
  (tracks) => {
    return Object.keys(tracks)
  }
)

export const getPlaylistTracksCount = state => getPlaylistTracksIndexes(state).length

export const isPlaylistEmpty = state => getPlaylistTracksCount(state) === 0

export const getShareFormValue = state => getShareCandidates(state)[0]

export const getShareCoverSrc = state => {
  const { cover } = getShareCandidates(state)[0]
  if (cover) {
    if (cover.includes(path.sep)) {
      return `file:///${cover}`
    } else {
      return `${getIpfsGateway(state)}/ipfs/${cover}`
    }
  }
  return null
}

export const getNotificationsIds = createSelector(
  getNotifications,
  Object.keys
)
export const getNotificationsLength = state => getNotificationsIds(state).length

// DISCOVER PAGE

export const isDiscoverHasAlbums = state => (
  getDiscoverFeedAlbums(state) !== null &&
  getDiscoverFeedAlbums(state).length > 0
)
export const isDiscoverSearchPerformed = state => !!getDiscoverSearchValue(state)
export const getDiscoverSelectedCount = state => getDiscoverSelectedIds(state).length
export const isDiscoverSelected = state => getDiscoverSelectedCount(state) !== 0
export const getDiscoverAlbumsIds = state => Array.from(getDiscoverFeedAlbums(state).keys())
export const getDiscoverSelectedCids = createSelector(
  [ getDiscoverSelectedIds, getDiscoverFeedAlbums ],
  (selectedIds, albums) => selectedIds.map(id => albums[id].albumCid)
)
