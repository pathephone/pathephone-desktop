import React from 'react'

const PlayerView = (props) => {
  const { onPlayStop, playerStatus, currentTrack } = props
  console.log(currentTrack)
  return (
    <div className='player izi-fill-width izi-padding izi-x izi-center'>
      <div className='player_controls'>
        <button
          className='izi-padding'
          onClick={onPlayStop}
        >
          {
            playerStatus === 'PLAYING'
              ? '||'
              : playerStatus === 'STOPED'
                ? '>'
                : null
          }
        </button>
      </div>
      {
        currentTrack
          ? <div className='player_track'>
            <h4>{currentTrack.title}</h4>
          </div>
          : null
      }
    </div>
  )
}

export default PlayerView
