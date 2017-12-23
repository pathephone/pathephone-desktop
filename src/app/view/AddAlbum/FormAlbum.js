import React from 'react'
import bind from '~/utils/recallReact'
import albumFormState, {state as albumFormData} from './formAlbumState'
import FormDNDAlbum from './FormAlbum/FormDNDAlbum'
import FormEditAlbum from './FormAlbum/FormEditAlbum'

const stateMethods = {
  onAboutChange (field, value) {
    albumFormState('EDIT_ABOUT', field, value)
  },
  setRawAlbum () {
    albumFormState('DROP')
  },
  onReplaceAlbum (albumData) {
    albumFormState('REPLACE_DATA', albumData)
  },
  async onAddTracks (tracks) {
    albumFormState('ADD_TRACKS', ...tracks)
    // код редактирования полей об альбоме, если он есть в метаданных
    if (tracks && tracks.length > 0) {
      const {artist, album} = tracks[0]
      if (albumFormData.artist.length === 0 && artist) { albumFormState('EDIT_ABOUT', 'artist', artist) }
      if (albumFormData.title.length === 0 && album) { albumFormState('EDIT_ABOUT', 'title', album) }
    }
  },
  onMoveTrackUp (index) {
    albumFormState('MOVE_TRACK_UP', index)
  },
  onMoveTrackDown (index) {
    albumFormState('MOVE_TRACK_DOWN', index)
  },
  onTrackChange (index, field, value) {
    albumFormState('EDIT_TRACK', index, field, value)
  },
  onDeleteTrack (index) {
    albumFormState('DELETE_TRACK', index)
  }
}

const FormEditAlbumConnected = bind({ formState: albumFormState }, FormEditAlbum)

class FormAlbum extends React.Component {
  handleDNDChange = (albumData) => {
    stateMethods.onReplaceAlbum(albumData)
    this.props.onFilesProcessed()
  }
  handleSuccess = () => {
    this.props.onSuccess()
    stateMethods.setRawAlbum()
  }
  render () {
    const { dnd } = this.props
    if (dnd) {
      return (
        <FormDNDAlbum onChange={this.handleDNDChange} key='form-fill' />
      )
    } else {
      return (
        <FormEditAlbumConnected
          {...stateMethods}
          onSuccess={this.handleSuccess}
          key='form-edit'
        />
      )
    }
  }
}

export default FormAlbum
