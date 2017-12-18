import React from 'react'
import publishAlbum from '../../scripts/publishAlbum'
import validateAlbum from '../../scripts/validateAlbum'
import IpfsFileInput from '../Ipfs/FileInput'
import bind from '../../utils/recallReact'
import albumFormState from './formAlbumState'
import AboutForm from './FormAlbum/AboutForm'
import TracksInput from './FormAlbum/TracksInput'
import formDataToJSON from '../../utils/formDataToJSON'

const onAddTrack = () => {
  albumFormState('ADD_TRACK')
}

const onDeleteTrack = (index) => {
  albumFormState('DELETE_TRACK', index)
}

class FormAlbum extends React.Component {
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
    const { formState } = this.props
    return (
      <div
        className='izi--gap izi-ys izi-fill-width'
      >
        <AboutForm value={formState} />
        <TracksInput value={formState} onAddTrack={onAddTrack} onDeleteTrack={onDeleteTrack} />
        <button type='submit' onClick={this.handleFormSubmit}>
          done
        </button>
      </div>
    )
  }
}

export default bind({ formState: albumFormState }, FormAlbum)
