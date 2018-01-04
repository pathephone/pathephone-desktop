import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import clearPlaylist from './clearPlaylist'

const PlaylistView = ({ playlist }) => {
  const SingleTrackWrapper = track => {
    return <PlaylistTrack {...track} key={track.id} />
  }
  return (
    <div className='playlist izi-ys' >
      {
        playlist.length > 0 ? (
          <button onClick={clearPlaylist}>
            clear
          </button>
        ) : (
          <label className='izi-padding izi-text-center izi-uppercase'>playlist is empty</label>
        )
      }
      {
        playlist.map(SingleTrackWrapper)
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
