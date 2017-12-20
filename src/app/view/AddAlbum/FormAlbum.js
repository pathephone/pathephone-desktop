import React from 'react'
import publishAlbum from '../../scripts/publishAlbum'
import validateAlbum from '../../scripts/validateAlbum'
import bind from '../../utils/recallReact'
import albumFormState, {state as albumFormData} from './formAlbumState'
import FormAbout from './FormAlbum/FormAbout'
import FormTracks from './FormAlbum/FormTracks'

const onAboutChange = (field, value) => {
  albumFormState('EDIT_ABOUT', field, value)
}

const onAddRawTrack = () => {
  albumFormState('ADD_RAW_TRACK')
}
const onAddTracks = async (tracks) => {
  albumFormState('ADD_TRACKS', ...tracks)
  // код редактирования полей об альбоме, если он есть в метаданных
  if (tracks && tracks.length > 0) {
    const {artist, album} = tracks[0]
    if (albumFormData.artist.length === 0 && artist)
      albumFormState('EDIT_ABOUT', 'artist', artist)
    if (albumFormData.title.length === 0 && album)
      albumFormState('EDIT_ABOUT', 'title', album)
  }
}

const onMoveTrackUp = (index) => {
  albumFormState('MOVE_TRACK_UP', index)
}
const onMoveTrackDown = (index) => {
  albumFormState('MOVE_TRACK_DOWN', index)
}

const onTrackChange = (index, field, value) => {
  albumFormState('EDIT_TRACK', index, field, value)
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
        <FormAbout value={formState} onChange={onAboutChange} />
        <FormTracks
          value={formState}
          onTrackChange={onTrackChange}
          onAddRawTrack={onAddRawTrack}
          onAddTracks={onAddTracks}
          onDeleteTrack={onDeleteTrack}
          onMoveTrackUp={onMoveTrackUp}
          onMoveTrackDown={onMoveTrackDown}
        />
        <button type='submit' onClick={this.handleFormSubmit}>
          done
        </button>
      </div>
    )
  }
}

export default bind({ formState: albumFormState }, FormAlbum)
