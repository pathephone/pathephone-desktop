import React from 'react'
import Input from '../../_/Input'

const AboutForm = (props) => {
  const { value } = props
  const onChange = (v, n) => {
    value[n] = v
  }
  const { artist, title, cover } = value
  return (
    <fieldset className='izi-ys izi--gap'>
      <legend>About album</legend>
      <Input
        defaultValue={title}
        name='title'
        placeholder='Album title'
        type='text'
        onChange={onChange}
      />
      <Input
        defaultValue={artist}
        name='artist'
        placeholder='Album artist'
        type='text'
        onChange={onChange}
      />
      <IpfsFileInput
        placeholder="Album cover's CID"
        name='cover'
        defaultValue={cover}
        onChange={onChange}
      />
    </fieldset>
  )
}
