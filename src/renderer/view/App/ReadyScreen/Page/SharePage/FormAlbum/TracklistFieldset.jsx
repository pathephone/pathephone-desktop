import React from 'react'
import propTypes from 'prop-types'
import { FieldArray } from 'redux-form'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

class TracklistRenderer extends React.Component {
  handleMap = (track, index, tracks) => {
    const props = {
      track,
      onDeleteTrack () {
        tracks.remove(index)
      }
    }
    if (index !== tracks.length - 1) {
      props.onMoveTrackDown = () => {
        tracks.move(index, index + 1)
      }
    }
    if (!index !== 0) {
      props.onMoveTrackUp = () => {
        tracks.move(index, index - 1)
      }
    }
    return (
      <TrackInput
        {...props}
        key={index}
      />
    )
  }
  render () {
    const { fields } = this.props
    return (
      <React.Fragment>
        <legend>{`Tracklist (${fields.length} tracks)`}</legend>
        {
          fields.map(this.handleMap)
        }
      </React.Fragment>
    )
  }
}

TracklistRenderer.propTypes = {
  fields: propTypes.object.isRequired
}

const TracklistFieldset = ({ isDisabled }) => (
  <fieldset disabled={isDisabled} className='izi-ys'>
    <FieldArray name='tracks' component={TracklistRenderer} />
  </fieldset>
)

TracklistFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired
}

export default TracklistFieldset
