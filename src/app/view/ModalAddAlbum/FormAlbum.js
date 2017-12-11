import React from 'react'
import publishAlbum from '../../scripts/publishAlbum'
import validateAlbum from '../../scripts/validateAlbum'
import IpfsFileInput from '../Ipfs/FileInput'
import bind from '../../utils/recallReact'
import albumFormState from './formAlbumState'
import TracksInput from './TracksInput'
import formDataToJSON from '../../utils/formDataToJSON'
import Input from '../_/Input'

const onAddTrack = () => {
  albumFormState('ADD_TRACK')
}

const onDeleteTrack = (index) => {
  albumFormState('DELETE_TRACK', index)
}

const AboutForm = (props) => {
  const { value } = props
  const onChange = (v, n) => {
    value[n] = v
  }
  const { artist, title, cover } = value
  return (
    <div className='izi-ys izi--gap'>
      <Input
        defaultValue={title}
        name='title'
        placeholder='Album title'
        type='text'
        onChange={onChange}
      />
      <Input
        defaultValue={artist}
        name='artist'
        placeholder='Album artist'
        type='text'
        onChange={onChange}
      />
      <IpfsFileInput
        placeholder="Album cover's CID"
        name='cover'
        defaultValue={cover}
        onChange={onChange}
      />
    </div>
  )
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
        className='izi-ys izi-fill-width'
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
