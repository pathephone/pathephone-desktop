import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import playlistState from '~/state/playlist'

const PlaylistView = ({ playlist }) => {
  return (
    <div className='playlist izi-ys' >
      {
        playlist.map((track) => {
          const onPlay = () => {
            playlistState('SET_CURRENT', track.id)
          }
          return <PlaylistTrack {...{ ...track, onPlay }} key={track.id} />
        })
      }
    </div>
  )
}

export default PlaylistView
