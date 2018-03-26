import playlistState from '~/state/playlist'
import setNextCurrentTrack from '~/scripts/setNextCurrentTrack'

const removeTrack = (id, current) => {
  if (current) {
    setNextCurrentTrack()
  }
  playlistState('REMOVE_TRACKS', id)
}

export default removeTrack
