import React from 'react'
import IpfsFileInput from '../Ipfs/FileInput'
import { Form } from 'semantic-ui-react'
import albumFormState, {state as albumState} from './formAlbumState'
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
  const trackFileChangeHandler = async (files) => {
    let fileIndex = 0
    for (const hashedFile of files) {
      const { file, hash } = hashedFile
      try {
        const {title, album, artist} = await readID3(file)
        albumFormState('EDIT_TRACK', index + fileIndex, {
          title, hash, artist
        })

        if (albumState.title.length === 0 && albumState.artist.length === 0) {
          albumFormState('SET_VALUE', 'artist', artist)
          albumFormState('SET_VALUE', 'title', album)
        }
      } catch (e) {
        albumFormState('EDIT_TRACK', index + fileIndex, {
          title, hash, artist
        })
      }
      if (++fileIndex < files.length) { albumFormState('ADD_TRACK') }
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
        multiple
        onChange={trackFileChangeHandler}
      />
    </Form.Group>
  )
}

export default TrackInput
