import React from 'react'
import IpfsFileInput from '../Ipfs/FileInput'
import albumFormState from './formAlbumState'

class TrackInput extends React.Component {
  render() {
    const { data, onChange, containerProps = {} } = this.props
    const handleInputChange = (e) => {
      const { name, value } = e.currentTarget
      data[name] = value
      onChange && onChange(data)
    }
    const { title, audio, artist } = data
    return (
      <div {...containerProps}>
        <input
          value={title}
          name='title'
          placeholder='Track title'
          type='text'
          onChange={handleInputChange}
        />
        <input
          value={artist}
          name='artist'
          label='Artist'
          placeholder='Artist'
          type='text'
          onChange={handleInputChange}
        />
        <IpfsFileInput
          name='audio'
          value={hash}
          placeholder='Audio file CID'
          onChange={onChange}
        />
      </div>
    )
  }
}

export default TrackInput
