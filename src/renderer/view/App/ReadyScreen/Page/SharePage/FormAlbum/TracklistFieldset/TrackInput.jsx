import React from 'react'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

import TrackControls from './TrackControls.jsx'

const TrackInput = ({ track, ...restProps }) => {
  return (
    <React.Fragment>
      <div className='izi-xs' key='container'>
        <Field
          name={`${track}.artist`}
          component='input'
          label='Artist'
        />
        <Field
          name={`${track}.title`}
          component='input'
          label='Title'
        />
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
