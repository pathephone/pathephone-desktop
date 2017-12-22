import React from 'react'
import FormAbout from './FormAbout'
import FormTracks from './FormTracks'

import publishAlbum from '../../../scripts/publishAlbum'
import validateAlbum from '../../../scripts/validateAlbum'

const Tips = () => (
  <fieldset>
    <legend>Tips</legend>
    <ul>
      <li>You can just <b>drag and drop</b> album files here. All fields will be filled automatically if possible.</li>
    </ul>
    <style jsx>{`
fieldset {
  color: green;
}
    `}</style>
  </fieldset>
)

class FormEditAlbum extends React.Component {
  state = {
    loading: false,
    errors: false
  }
  handleFormSubmit = async (e) => {
    try {
      e.preventDefault()
      this.setState({ loading: true })
      const { formState } = this.props
      const { valid, validatorErrors } = validateAlbum(formState)
      if (!valid) {
        this.setState({ validatorErrors, loading: false })
      } else {
        await publishAlbum(formState)
        this.props.onSuccess()
      }
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    const {
      formState
    } = this.props
    return (
      <div
        className='izi--gap izi-ys izi-fill-width'
      >
        <Tips />
        <FormAbout
          value={formState}
          onChange={this.props.onAboutChange}
        />
        <FormTracks
          value={formState}
          onTrackChange={this.props.onTrackChange}
          onAddTracks={this.props.onAddTracks}
          onDeleteTrack={this.props.onDeleteTrack}
          onMoveTrackUp={this.props.onMoveTrackUp}
          onMoveTrackDown={this.props.onMoveTrackDown}
        />
        <button type='submit' onClick={this.handleFormSubmit}>
          done
        </button>
      </div>
    )
  }
}

export default FormEditAlbum
