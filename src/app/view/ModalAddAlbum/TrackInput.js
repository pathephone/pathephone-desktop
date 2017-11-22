import React from 'react'
import IpfsFileInput from '../Ipfs/FileInput'
import { Form } from 'semantic-ui-react'
import albumFormState from './formAlbumState'

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
  const trackFileChangeHandler = (value) => {
    albumFormState('EDIT_TRACK', index, {
      title, hash: value, artist
    })
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
