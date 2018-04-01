import React from 'react'
import Input from '#/Input'
import AudioElement from './TrackInput/AudioElement'

class TrackInput extends React.Component {
  render () {
    const { value, onChange, index } = this.props
    const { title, hash, artist } = value
    return (
      <div className='izi-ys izi-margin-top' style={{ flexBasis: '100%' }}>
        <div className='izi-x'>
          <div className='izi-yl izi-fill-width'>
            <Input
              className='input izi-fill-width'
              value={title}
              name={`album.tracks[${index}].title`}
              placeholder='Track title'
              label
              type='text'
              onChange={onChange}
            />
          </div>
          <br />
          <div className='izi-yl izi-fill-width izi-margin-left'>
            <Input
              className='input izi-fill-width'
              value={artist}
              name={`album.tracks[${index}].artist`}
              label
              placeholder='Artist'
              type='text'
              onChange={onChange}
            />
          </div>
        </div>
        <br />
        <AudioElement
          name={`album.tracks[${index}].hash`}
          hash={hash}
        />
      </div>
    )
  }
}

export default TrackInput
