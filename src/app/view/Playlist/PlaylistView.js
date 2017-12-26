import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import playlistState from '../../state/playlist'
import downloadPlaylist from '~/scripts/downloadPlaylist'

const PlaylistView = ({ playlist }) => {
  downloadPlaylist(playlist)
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
