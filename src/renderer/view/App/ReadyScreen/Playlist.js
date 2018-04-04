import { connect } from 'redux'

import PlaylistView from './Playlist/PlaylistView'

import { playPlaylistTrack, removeTrackFromPlaylist } from '~/actions'

const getPlaylistTracks = ({ playlist, currentTrackId, cachedTracks }) => {
  const handleMap = ({ cid, id, title, artist }) => {
    return {
      title,
      artist,
      isCurrent: id === currentTrackId,
      isCached: cachedTracks.includes(cid)
    }
  }
  return playlist.map(handleMap)
}

const mapStateToProps = state => ({
  tracks: getPlaylistTracks(state),
  isPlaying: !state.player.paused
})

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayTrack (id) {
      dispatch(playPlaylistTrack(id))
    },
    onRemoveTrack (id) {
      dispatch(removeTrackFromPlaylist(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistView)
