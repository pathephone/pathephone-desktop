import React from 'react'
import { Field } from 'redux-form'

import TrackControls from './TrackControls.jsx'

const TrackInput = (track, index, tracks) => {
  const controlsProps = {
    onDeleteTrack: () => {
      tracks.remove(index)
    }
  }
  if (index !== tracks.length - 1) {
    controlsProps.onMovetrackDown = () => {
      tracks.move(index, index + 1)
    }
  }
  if (!index !== 0) {
    controlsProps.onMovetrackUp = () => {
      tracks.move(index, index - 1)
    }
  }
  return (
    <React.Fragment>
      <div className='izi-xs' key='container'>
        <Field
          name='artist'
          component='input'
          label='Artist'
        />
        <Field
          name='title'
          component='input'
          label='Title'
        />
        <TrackControls
          {...controlsProps}
        />
      </div>
      <hr key='separator' />
    </React.Fragment>
  )
}

export default TrackInput
