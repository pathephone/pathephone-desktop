import withIpfsGateway from '~utils/withIpfsGateway'

import {
  getAppStartProgress,
  getFeedAlbums,
  getDiscoverSelectedAlbums,
  getDiscoverSearchValue,
  getCurrentTrackIndex,
  getPlaylistLastTrackIndex,
  getPlaylistTracksByIndex,
  getShareCandidates,
  isRepeatTurnedOn
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

export const isShareCandidatesRecieved = state => !!getShareCandidates(state)

export const isPlaylistEmpty = state => !getPlaylistLastTrackIndex(state)

export const getCurrentTrack = state => {
  return getPlaylistTracksByIndex(state)[getCurrentTrackIndex(state)]
}

export const getShareFormValue = state => getShareCandidates(state)[0]

export const shouldPlaylistBeRepeated = state => {
  const currentTrack = getCurrentTrack(state)
  const isRepeat = isRepeatTurnedOn(state)
  return !currentTrack && isRepeat
}
