import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'

const onPlay = (id) => {
  playlistState('SET_CURRENT', id)
}

const onPause = () => {
  playerState('PAUSE')
}

const PlaylistView = ({ playlist }) => {
  return (
    <div className='playlist izi-ys' >
      {
        playlist.map((track) => {
          return <PlaylistTrack {...{ ...track, onPlay, onPause }} key={track.id} />
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
