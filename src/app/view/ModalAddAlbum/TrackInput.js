import React from 'react'
import IpfsFileInput from '../Ipfs/FileInput'
import { Form } from 'semantic-ui-react'
import albumFormState from './formAlbumState'
import readID3 from '../../utils/id3'

const TrackInput = ({ track, validatorErrors, index }) => {
  const { title, hash, artist } = track
  const trackTitleChangeHandler = (e) => {
    const { value } = e.currentTarget
    albumFormState('EDIT_TRACK', index, {
      title: value, hash, artist
    })
  }
  const trackArtistChangeHandler = (e) => {
    const { value } = e.currentTarget
    albumFormState('EDIT_TRACK', index, {
      artist: value, hash, title
    })
  }
  const trackFileChangeHandler = async ({hash, file}) => {
    try {
      const {title, album, artist} = await readID3(file)
      albumFormState('EDIT_TRACK', index, {
        title, hash, artist
      })
      let formData = {}
      albumFormState('GET', 'title', formData)
      albumFormState('GET', 'artist', formData)
      if (typeof formData.title !== 'undefined' && typeof formData.artist !== 'undefined') {
        if (formData.title.length > 0 || formData.artist.length > 0) { return }

        albumFormState('SET_VALUE', 'artist', artist)
        albumFormState('SET_VALUE', 'title', album)
      }
    } catch (e) {
      albumFormState('EDIT_TRACK', index, {
        title, hash, artist
      })
    }
  }
  return (
    <Form.Group widths='equal'>
      <Form.Input
        // error={validatorErrors.some(({ dataPath }) => dataPath === `.tracks[${index}].title`)}
        value={title}
        name='title'
        label='Title'
        placeholder='Track title'
        type='text'
        onChange={trackTitleChangeHandler}
      />
      <Form.Input
        // error={validatorErrors.some(({ dataPath }) => dataPath === `.tracks[${index}].title`)}
        value={artist}
        name='artist'
        label='Artist'
        placeholder='Artist'
        type='text'
        onChange={trackArtistChangeHandler}
      />
      <IpfsFileInput
        value={hash}
        label='Audio file'
        icon='music'
        onChange={trackFileChangeHandler}
      />
    </Form.Group>
  )
}

export default TrackInput
