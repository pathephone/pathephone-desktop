import { createSelector } from 'reselect'
import withIpfsGateway from '~utils/withIpfsGateway'

import {
  getAppStartProgress,
  getFeedAlbums,
  getDiscoverSelectedAlbums,
  getDiscoverSearchValue,
  getCurrentTrackIndex,
  getPlaylistTracksByIndex,
  getShareCandidates
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
  return withIpfsGateway(track.cid)
}

export const isPlayerActive = state => {
  return getCurrentTrackIndex(state) !== null
}

export const isFeedHasAlbums = state => getFeedAlbums(state).length !== 0
export const getSelectedFeedAlbumsCount = state => getDiscoverSelectedAlbums(state).length
export const isFeedAlbumsSelected = state => getDiscoverSelectedAlbums(state).length !== 0
export const isFeedSearchPerformed = state => !!getDiscoverSearchValue(state).searchValue

export const isShareCandidatesRecieved = state => !!getShareCandidates(state)

export const getPlaylistTracksIndexes = createSelector(
  getPlaylistTracksByIndex,
  (tracks) => {
    return Object.keys(tracks)
  }
)

export const getPlaylistTracksCount = state => getPlaylistTracksIndexes(state).length

export const isPlaylistEmpty = state => getPlaylistTracksCount(state) === 0

export const getShareFormValue = state => getShareCandidates(state)[0]
