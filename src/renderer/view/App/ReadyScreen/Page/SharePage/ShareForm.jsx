import React from 'react'
import propTypes from 'prop-types'
import dotProp from 'dot-prop-immutable'

import IziForm from '~components/IziForm.jsx'

import AboutFieldset from './ShareForm/AboutFieldset.jsx'
import TracklistFieldset from './ShareForm/TracklistFieldset.jsx'
import FormControls from './ShareForm/FormControls.jsx'

import './ShareForm.css'

class ShareForm extends React.Component {
  handleChange = e => {
    let { name, value, files, type } = e.target
    if (!name) return
    let nextValues
    if (type === 'file') {
      nextValues = dotProp.set(this.props.values, name, files[0])
    } else {
      nextValues = dotProp.set(this.props.values, name, value)
    }
    this.props.onChange(nextValues)
  }
  handleAddTracks = e => {
    const { values } = this.props
    const { files } = e.target
    if (files.length > 0) {
      const newTracks = Array.from(files)
        .map(file => ({ file }))
      this.props.onChange({
        ...values,
        tracks: [ ...values.tracks, ...newTracks ]
      })
    }
    e.target.value = ''
  }
  handleRemoveTrack = index => {
    const { values } = this.props
    const nextValues = dotProp.delete(values, `tracks.${index}`)
    this.props.onChange(nextValues)
  }
  render () {
    const { values } = this.props
    return (
      <IziForm className='shareForm' values={values} onChange={this.handleChange}>
        <AboutFieldset cover={values.cover} />
        <TracklistFieldset
          tracks={values.tracks}
          onFilesSelect={this.handleAddTracks}
          onMoveTrackUp={this.handleMoveTrackUp}
          onMoveTrackDown={this.handleMoveTrackDown}
          onRemoveTrack
        />
        <FormControls {...this.props} />
      </IziForm>
    )
  }
}

ShareForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  values: propTypes.object
}

export default ShareForm
