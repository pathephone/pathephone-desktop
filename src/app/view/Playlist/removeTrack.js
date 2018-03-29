import playlistState from '~app/state/playlist'
import setNextCurrentTrack from '~app/scripts/setNextCurrentTrack'

const removeTrack = (id, current) => {
  if (current) {
    setNextCurrentTrack()
  }
  playlistState('REMOVE_TRACKS', id)
}

export default removeTrack
