import { getPlayedTrackId, getPlaylistTracks, getAppStartProgress } from '#selectors'

import withIpfsGateway from '~utils/withIpfsGateway'

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
