import withIpfsGateway from '~utils/withIpfsGateway'

import {
  getPlayedTrackId, getPlaylistTracks, getAppStartProgress,
  getFeedAlbums, getDiscoverSelectedAlbums, getDiscoverSearchValue, getSharedFiles
} from '#selectors'

export const isAppReady = state => getAppStartProgress(state) === 100

export const getPlayedTrack = state => {
  const currentTrackId = getPlayedTrackId(state)
  const tracks = getPlaylistTracks(state)
  const handleFind = track => {
    return track.id === currentTrackId
  }
  return tracks.find(handleFind)
}

export const getPlayedTrackSource = state => {
  const track = getPlayedTrack(state)
  if (track) {
    return withIpfsGateway(track.cid)
  }
  return undefined
}

export const isPlayerActive = state => {
  return !!getPlayedTrackId(state)
}

export const isFeedHasAlbums = state => getFeedAlbums(state).length !== 0
export const getSelectedFeedAlbumsCount = state => getDiscoverSelectedAlbums(state).length
export const isFeedAlbumsSelected = state => getDiscoverSelectedAlbums(state).length !== 0
export const isFeedSearchPerformed = state => !!getDiscoverSearchValue(state).searchValue

export const isSharingInProcess = state => !!getSharedFiles(state)

export const getPreviousTrackId = state => {
  const currentTrackId = getPlayedTrackId(state)
  const tracklist = getPlaylistTracks(state)
  for (let i = 0; i < tracklist.length; i++) {
    if (tracklist[i].id === currentTrackId) {
      const previousTrack = tracklist[i - 1]
      if (previousTrack) {
        return previousTrack.id
      } else {
        break
      }
    }
  }
}

export const getNextTrackId = state => {
  const currentTrackId = getPlayedTrackId(state)
  const tracklist = getPlaylistTracks(state)
  for (let i = 0; i < tracklist.length; i++) {
    if (tracklist[i].id === currentTrackId) {
      const nextTrack = tracklist[i + 1]
      if (nextTrack) {
        return nextTrack.id
      } else {
        break
      }
    }
  }
}
