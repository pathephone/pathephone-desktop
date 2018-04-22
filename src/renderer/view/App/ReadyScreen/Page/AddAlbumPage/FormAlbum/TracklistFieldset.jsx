import React from 'react'
import propTypes from 'prop-types'
import { FieldArray } from 'redux-form'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

const TracklistRenderer = ({ fields }) => (
  <React.Fragment>
    <legend>{`Tracklist (${fields.length} tracks)`}</legend>
    {
      fields.map(TrackInput)
    }
  </React.Fragment>
)

TracklistRenderer.propTypes = {
  fields: propTypes.array.isRequired
}

const TracklistFieldset = ({ disabled }) => (
  <fieldset disabled={disabled} className='izi-ys'>
    <FieldArray name='tracklist' component={TracklistRenderer} />
  </fieldset>
)

TracklistFieldset.propTypes = {
  disabled: propTypes.bool.isRequired
}

export default TracklistFieldset
