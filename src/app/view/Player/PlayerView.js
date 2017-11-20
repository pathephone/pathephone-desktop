import React from 'react'
import ReactPlayer from 'react-audio-player'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'

const PlayerView = (props) => {
  const { title, artist, src, onPlayNextTrack, onPlayPrevTrack } = props
  return (
    <div className='player izi-fill-width izi-padding izi-y'>
      <div className='player__upper-block izi-x'>
        <button onClick={onPlayPrevTrack}>
          <MdSkipPrev />
        </button>
        <div className='player__info izi-y izi-padding-x'>
          <h4 className='album_title'>{title}</h4>
          <h5 className='album_artist'>{artist}</h5>
        </div>
        <button onClick={onPlayNextTrack}>
          <MdSkipNext />
        </button>
      </div>
      <ReactPlayer
        className='izi-fill-width'
        controls
        autoPlay
        src={src}
        onEnded={onPlayNextTrack}
      />
    </div>
  )
}

export default PlayerView
