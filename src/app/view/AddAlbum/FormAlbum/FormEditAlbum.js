import React from 'react'
import FormAbout from './FormAbout'
import FormTracks from './FormTracks'

import publishAlbum from '../../../scripts/publishAlbum'
import validateAlbum from '../../../scripts/validateAlbum'

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
        this.setState({ loading: false })
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
