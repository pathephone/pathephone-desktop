import React from 'react'
import Input from '../../_/Input'
import MdAudio from 'react-icons/lib/md/audiotrack'

const AudioElement = ({ hash, name }) => (
  <div className='izi-x'>
    <MdAudio className='icon' />
    <input value={hash} name={name} disabled className='hash izi-dots izi-fill-width izi-margin-left' />
    <style jsx>{`
.icon {
  flex-shrink: 0
}
.hash {
  border: none;
  background: none;
  font-size: 0.75em;
  color: #434343;
}
    `}</style>
  </div>
)

class TrackInput extends React.Component {
  render () {
    const { value, onChange, index } = this.props
    const { title, hash, artist } = value
    return (
      <div className='izi-ys izi-margin-top' style={{ flexBasis: '100%' }}>
        <div className='izi-x'>
          <div className='izi-yl izi-fill-width'>
            <Input
              className='izi-fill-width'
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
              className='izi-fill-width'
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
