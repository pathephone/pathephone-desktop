import React from 'react'
import Input from '../../_/Input'

class TrackInput extends React.Component {
  render () {
    const { value, onChange } = this.props
    const { title, hash, artist } = value
    return (
      <p className='izi-ys' style={{ flexBasis: '100%' }}>
        <Input
          value={title}
          name='title'
          placeholder='Track title'
          label
          type='text'
          onChange={onChange}
        />
        <br />
        <Input
          value={artist}
          name='artist'
          label
          placeholder='Artist'
          type='text'
          onChange={onChange}
        />
        <br />
        <Input
          value={hash}
          name='hash'
          label
          placeholder='Audio data CID'
          type='text'
          onChange={onChange}
        />
      </p>
    )
  }
}

export default TrackInput
