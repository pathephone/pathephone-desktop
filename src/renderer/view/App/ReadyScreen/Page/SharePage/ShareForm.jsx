import React from 'react'
import propTypes from 'prop-types'
import dotProp from 'dot-prop-immutable'

import { E2E_SHARE_FORM_ID } from '~data/e2eConstants'
import validateShareCandidate from '~utils/validateShareCandidate'
import IziForm from '~components/IziForm.jsx'

import AboutFieldset from './ShareForm/AboutFieldset.jsx'
import TracklistFieldset from './ShareForm/TracklistFieldset.jsx'
import FormControls from './ShareForm/FormControls.jsx'

import './ShareForm.css'

const toNextValues = (values, e) => {
  const { name, value, files } = e.target
  let nextValue
  switch (name) {
    case 'cover.image': {
      if (files[0] && files[0].type.startsWith('image/')) {
        nextValue = files[0].path
      }
      break
    }
    case 'tracks': {
      if (files.length > 0) {
        const newTracks = Array.from(files)
          .map(file => ({ audio: file.path }))
        nextValue = [ ...values.tracks, ...newTracks ]
        e.target.value = ''
      }
      break
    }
    default:
      nextValue = value
  }
  if (nextValue) {
    return dotProp.set(values, name, nextValue)
  }
}

class ShareForm extends React.Component {
  state = {
    validationErrors: {}
  }
  handleChange = e => {
    const nextValues = toNextValues(this.props.values, e)
    if (nextValues) {
      this.props.onChange(nextValues)
    }
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
  handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(this.state.validationErrors).length === 0) {
      this.props.onSubmit(this.props.values)
    }
  }
  validate = (values) => {
    const errors = validateShareCandidate(values)
    this.setState({ validationErrors: errors || {} })
  }
  componentWillMount () {
    if (this.props.values) {
      this.validate(this.props.values)
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.values !== this.props.values) {
      this.validate(nextProps.values)
    }
  }
  render () {
    const {
      values,
      isDisabled,
      coverSrc,
      onCancel,
      onReset
    } = this.props
    const { validationErrors } = this.state
    return (
      <IziForm
        id={E2E_SHARE_FORM_ID}
        className='shareForm'
        values={values}
        errors={validationErrors}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div className='shareFormBody'>
          <AboutFieldset
            coverSrc={coverSrc}
            isDisabled={isDisabled}
          />
          <TracklistFieldset
            tracks={values.tracks}
            errors={validationErrors}
            isDisabled={isDisabled}
            onMoveTrackUp={this.handleMoveTrackUp}
            onMoveTrackDown={this.handleMoveTrackDown}
            onRemoveTrack={this.handleRemoveTrack}
          />
        </div>
        <div className='shareFormControls'>
          <FormControls
            isDisabled={isDisabled}
            onCancelClick={onCancel}
            onResetClick={onReset}
          />
        </div>
      </IziForm>
    )
  }
}

ShareForm.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  onReset: propTypes.func.isRequired,
  coverSrc: propTypes.string,
  values: propTypes.object
}

export default ShareForm
