import React from 'react'
import ReactPlayer from 'react-audio-player'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdRepeat from 'react-icons/lib/md/repeat'
import MdShuffle from 'react-icons/lib/md/shuffle'
import playerState from '../../state/player'
import bind from '../../utils/recallReact'

const PlayerView = (props) => {
  const { title, artist, src, onPlayNextTrack, onPlayPrevTrack, playerStateForm } = props
  const { shuffle, repeat } = playerStateForm
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
      <div className='izi-x izi-fill-width'>
        <ReactPlayer
          className='izi-fill-width'
          controls
          autoPlay
          src={src}
          onEnded={onPlayNextTrack}
        />
        <button onClick={() => playerState('TOGGLE_SHUFFLE')}>
          <MdShuffle style={shuffle ? {fill: '#a6af3f'} : undefined} />
        </button>
        <button onClick={() => playerState('TOGGLE_REPEAT')}>
          <MdRepeat style={repeat ? {fill: '#a6af3f'} : undefined} />
        </button>
      </div>
    </div>
  )
}

export default bind({ playerStateForm: playerState }, PlayerView)
