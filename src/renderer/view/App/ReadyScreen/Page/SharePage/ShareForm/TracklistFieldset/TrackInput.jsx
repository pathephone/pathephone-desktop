import React from 'react'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

import TrackControls from './TrackControls.jsx'

const TrackInput = ({ track, ...restProps }) => {
  return (
    <React.Fragment>
      <div className='izi-xs '>
        <div className='izi-ys izi-fill-width'>
          <Field
            name={`${track}.artist`}
            placeholder='artist'
            component='input'
            label='Artist'
          />
          <Field
            name={`${track}.title`}
            placeholder='title'
            component='input'
            label='Title'
          />
        </div>
        <TrackControls
          {...restProps}
        />
      </div>
      <hr key='separator' />
    </React.Fragment>
  )
}

TrackInput.propTypes = {
  track: propTypes.string.isRequired
}

export default TrackInput
