import React from 'react'
import Input from '../../_/Input'
import MdAudio from 'react-icons/lib/md/audiotrack'

const AudioElement = ({ hash }) => (
  <div className='izi-x'>
    <MdAudio className='icon' />
    <span className='hash izi-dots izi-margin-left'>
      {hash}
    </span>
    <style jsx>{`
.icon {
  flex-shrink: 0
}
.hash {
  white-space: nowrap;
  font-size: 0.75em;
  color: #434343;
}
    `}</style>
  </div>
)

class TrackInput extends React.Component {
  render () {
    const { value, onChange } = this.props
    const { title, hash, artist } = value
    return (
      <p className='izi-ys' style={{ flexBasis: '100%' }}>
        <div className='izi-x'>
          <div className='izi-yl izi-fill-width'>
            <Input
              className='izi-fill-width'
              value={title}
              name='title'
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
              name='artist'
              label
              placeholder='Artist'
              type='text'
              onChange={onChange}
            />
          </div>
        </div>
        <br />
        <AudioElement
          hash={hash}
        />
      </p>
    )
  }
}

export default TrackInput
