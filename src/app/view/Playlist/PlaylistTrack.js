import React from 'react'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'
const PlaylistTrack = ({ title, artist, current, id, onPlay }) => {
  console.log(title)
  return (
    <div className='playlist_track izi-x'>
      {
        !current
          ? <button
            onClick={onPlay}
          >
            <MdPlayArrow />
          </button>
          : null
      }
      <div className='izi-yl izi-margin-left'>
        <span className='track_title'>
          {title}
        </span>
        <span className='track_artist'>
          {artist}
        </span>
      </div>
    </div>
  )
}

export default PlaylistTrack
