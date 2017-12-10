import React from 'react'
import publishAlbum from '../../scripts/publishAlbum'
import validateAlbum from '../../scripts/validateAlbum'
import IpfsFileInput from '../Ipfs/FileInput'
import bind from '../../utils/recallReact'
import albumFormState from './formAlbumState'
import TracksInput from './TracksInput'
import formDataToJSON from '../../utils/formDataToJSON'

const changeHandler = (e) => {
  const { name, value } = e.currentTarget
  albumFormState('SET_VALUE', name, value)
}

const coverChangeHandler = (value) => {
  albumFormState('SET_VALUE', 'cover', value)
}

class FormAlbum extends React.Component {
  state = {
    loading: false,
    errors: false
  }
  handleFormSubmit = async (e) => {
    try {
      this.setState({ loading: true })
      e.preventDefault()
      const formData = formDataToJSON(e.currentTarget)
      const { valid, validatorErrors } = validateAlbum(formData)
      if (!valid) {
        this.setState({ validatorErrors, loading: false })
      } else {
        await publishAlbum(formData)
        this.setState({ loading: false })
      }
    } catch (error) {
      console.log(error)
    }
  }
  changeValue = (field, nexValue) => {
    const { value, onChange } = this.props
    value[field] = nexValue
    onChange && onChange()
  }
  handleCoverChange = (value) => {
    this.changeValue('cover', value)
  }
  handleTextInputChange = (e) => {
    const { name, value } = e.currentTarget
    this.changeValue(name, value)
  }
  render () {
    const { value, onChange } = this.props
    const { title, artist, cover, tracks } = value
    return (
      <div
        className='izi-ys izi--gap izi-fill-width'
      >
        <input
          defaultValue={title}
          name='title'
          placeholder='Album title'
          type='text'
          onChange={this.handleTextInput}
        />
        <input
          defaultValue={artist}
          name='artist'
          placeholder='Album artist'
          type='text'
        />
        <IpfsFileInput
          placeholder="Album cover's CID"
          value={cover}
          onChange={this.handleCoverChange}
        />
        <TracksInput value={tracks} onChange={onChange}/>
        <button type='submit' onClick={this.handleFormSubmit}>
          done
        </button>
      </div>
    )
  }
}

export default bind({ formState: albumFormState }, FormAlbum)
