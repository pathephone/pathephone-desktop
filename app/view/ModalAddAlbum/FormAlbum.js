import React from 'react'
import publishAlbum from 'scripts/publishAlbum'
import validateAlbum from 'scripts/validateAlbum'
import IpfsFileInput from '../Ipfs/FileInput'
import { Message, Divider, Button, Form } from 'semantic-ui-react'
import bind from 'utils/recallReact'
import albumFormState from './formAlbumState'
import TrackInput from './TrackInput'

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
  submitHandler = async (e) => {
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
    const { loading, validatorErrors } = this.state
    const { formState } = this.props
    console.log(formState)
    const { title, artist, cover, tracks } = formState
    return (
      <div className='izi-padding'>
        <Form loading={loading} size='large' error={!!validatorErrors}>
          <Form.Group widths='equal'>
            <Form.Input
              // error={validatorErrors.some(({ dataPath }) => dataPath === '.title')}
              value={title}
              name='title'
              label='Album title'
              placeholder='Album title'
              type='text'
              onChange={changeHandler}
            />
            <Form.Input
              value={artist}
              // error={validatorErrors.some(({ dataPath }) => dataPath === '.artist')}
              name='artist'
              label='Artist name'
              placeholder='Album artist'
              type='text'
              onChange={changeHandler}
            />
            <IpfsFileInput
              label='Album cover'
              icon='image'
              value={cover}
              onChange={coverChangeHandler}
            />
          </Form.Group>
          <Divider horizontal content='tracks' />
          {
            tracks.length > 0
          ? tracks.map(
              (track, index) => <TrackInput {...{ track, validatorErrors, index }} />
            )
          : null
          }
          <Button onClick={() => albumFormState('ADD_TRACK')}>
            ADD TRACK
          </Button>
          <Button onClick={this.submitHandler}>
            ADD ALBUM
          </Button>
          {
            validatorErrors
          ? <Message
            error
            header='Invalid fields'
            list={
                validatorErrors.map(({ message, dataPath }) => `[${dataPath}] ${message}`)
              }
            />
          : null
          }
        </Form>
      </div>
    )
  }
}

export default bind({ formState: albumFormState }, FormAlbum)
