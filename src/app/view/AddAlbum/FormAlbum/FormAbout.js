import React from 'react'
import Input from '../../_/Input'
import IpfsFileInput from '../../Ipfs/FileInput'

const AboutForm = (props) => {
  const { value, onChange } = props
  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    onChange(name, value)
  }
  const { artist, title, cover } = value
  return (
    <fieldset>
      <legend>About album</legend>
      <p className='izi-ys'>
        <Input
          value={title}
          name='title'
          placeholder='Album title'
          label
          type='text'
          onChange={handleChange}
        />
        <br />
        <Input
          value={artist}
          name='artist'
          label
          placeholder='Album artist'
          type='text'
          onChange={handleChange}
        />
        <br />
        <label>Album cover CID</label>
        <IpfsFileInput
          placeholder='Album cover CID'
          name='cover'
          defaultValue={cover}
          onChange={handleChange}
        />
      </p>
    </fieldset>
  )
}

export default AboutForm
