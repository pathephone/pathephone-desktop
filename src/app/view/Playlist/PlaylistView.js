import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import playNextTrack from '~/scripts/playNextTrack'

const onPlay = (id) => {
  playlistState('SET_CURRENT', id)
}

const onPause = () => {
  playerState('TOGGLE_PAUSE')
}

const onRemove = (id, current) => {
  if (current) {
    playNextTrack()
  }
  playlistState('REMOVE_TRACKS', id)
}

const PlaylistView = ({ playlist, onClearPlaylist }) => {
  return (
    <div className='playlist izi-ys' >
      {
        playlist.length > 0 ? (
          <button onClick={onClearPlaylist}>
            clear
          </button>
        ) : (
          <label className='izi-padding izi-text-center izi-uppercase'>playlist is empty</label>
        )
      }
      {
        playlist.map((track) => {
          return <PlaylistTrack {...{ ...track, onPlay, onPause, onRemove }} key={track.id} />
        })
      }
      <style jsx>{`
.playlist {
  background-color: #f1f1f1;
  overflow-y: auto;
}
      `}</style>
    </div>
  )
}

export default PlaylistView
