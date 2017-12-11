import React from 'react'
import IpfsFileInput from '../Ipfs/FileInput'
import Input from '../_/Input'

class TrackInput extends React.Component {
  render () {
    const { value } = this.props
    const handleInputChange = (v, n) => {
      value[n] = v
    }
    const { title, hash, artist } = value
    return (
      <div className='izi-ys' style={{ flexBasis: '100%' }}>
        <Input
          defaultValue={title}
          name='title'
          placeholder='Track title'
          type='text'
          onChange={handleInputChange}
        />
        <Input
          defaultValue={artist}
          name='artist'
          label='Artist'
          placeholder='Artist'
          type='text'
          onChange={handleInputChange}
        />
        <IpfsFileInput
          name='hash'
          defaultValue={hash}
          placeholder='Audio file CID'
          onChange={handleInputChange}
        />
      </div>
    )
  }
}

export default TrackInput
