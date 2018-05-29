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
  handleMoveTrack = (index, isUp) => {
    const { values } = this.props
    const track1Path = `tracks.${index}`
    const track2Path = `tracks.${isUp ? index - 1 : index + 1}`
    const track1 = dotProp.get(values, track1Path)
    const track2 = dotProp.get(values, track2Path)
    const proxyValues = dotProp.set(values, track1Path, track2)
    const nextValues = dotProp.set(proxyValues, track2Path, track1)
    this.props.onChange(nextValues)
  }
  handleMoveTrackDown = index => {
    this.handleMoveTrack(index, false)
  }
  handleMoveTrackUp = index => {
    this.handleMoveTrack(index, true)
  }
  handleSubmit = () => {
    this.props.onSubmit(this.props.values)
  }
  render () {
    const { values, onCancel, isDisabled } = this.props
    return (
      <IziForm
        className='shareForm'
        values={values}
        onChange={this.handleChange}
      >
        <div className='shareFormBody'>
          <AboutFieldset
            cover={values.cover}
            isDisabled={isDisabled}
          />
          <TracklistFieldset
            tracks={values.tracks}
            isDisabled={isDisabled}
            onFilesSelect={this.handleAddTracks}
            onMoveTrackUp={this.handleMoveTrackUp}
            onMoveTrackDown={this.handleMoveTrackDown}
            onRemoveTrack={this.handleRemoveTrack}
          />
        </div>
        <div className='shareFormControls'>
          <FormControls
            isDisabled={isDisabled}
            onCancelClick={onCancel}
            onSubmitClick={this.handleSubmit}
          />
        </div>
      </IziForm>
    )
  }
}

ShareForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  values: propTypes.object,
  isDisabled: propTypes.bool.isRequired
}

export default ShareForm
