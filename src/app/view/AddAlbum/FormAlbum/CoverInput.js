import React from 'react'
import MdCover from 'react-icons/lib/md/album'
import MdBroken from 'react-icons/lib/md/broken-image'
import MdSync from 'react-icons/lib/md/sync'
import Async from '@/Async'
import putFilesToIpfs from '~/scripts/putFilesToIpfs'
import multihashToUrl from '~/scripts/multihashToUrl'
import asyncTimeout from '~/utils/asyncTimeout'

const checkIsImage = (file) => {
  return file.type.includes('image')
}

export const getImageFromFiles = async (files) => {
  files = files.filter(checkIsImage) // only images
  if (files.length > 0) {
    return (await putFilesToIpfs(files))[0].hash
  }
}

const CoverPreview = ({ data }) => (
  <div
    className='izi-y izi-center izi-fill'
    style={{
      backgroundImage: `url(${data})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
)

const SyncCover = () => (
  <MdSync
    className='sync-icon izi-gray rotating'
  />
)

const BrokenCover = () => (
  <MdBroken
    className='broken-image-icon izi-gray'
  />
)

const NoCover = () => (
  <MdCover
    className='no-cover-icon izi-gray'
  />
)

class CoverInput extends React.Component {
  handleFileInputChange = e => {
    const files = Array.from(e.currentTarget.files)
    const hasImage = files.some(checkIsImage)
    if (hasImage) {
      console.log('HAS IMAGE')
      this.handleFiles(files)
    } else {
      console.log('HAS IMAGE')
    }
  }
  handleFiles = async (files) => {
    const { onChange } = this.props
    try {
      const imageHash = await getImageFromFiles(Array.from(files))
      onChange(imageHash)
    } catch (error) {
      console.error(error)
    }
  }
  handleClick = () => { this.fileInput.click() }
  shouldComponentUpdate (nextProps) {
    return nextProps.value !== this.props.value
  }
  getImageUrl = async () => {
    await asyncTimeout(1000)
    const { value } = this.props
    return multihashToUrl(value)
  }
  render () {
    const { value, name } = this.props
    console.log(name)
    console.log(value)
    return (
      <button
        onClick={this.handleClick}
        className='cover-upload izi-margin-left'
      >
        <div className='cover-upload__inner izi-relative izi-y izi-center'>
          <input
            ref={c => { this.fileInput = c }}
            id='input_add-cover'
            type='file'
            onChange={this.handleFileInputChange}
          />
          <input type='hidden' name={name} value={value} disabled />
          {
            value ? (
              <Async
                call={this.getImageUrl}
                readyView={CoverPreview}
                errorView={BrokenCover}
                waitView={SyncCover}
              />
            ) : (
              <NoCover />
            )
          }
        </div>
        <style jsx>{`
input[type='file'] {
  display: none;
}
.cover-upload {
  background: none;
  flex-shrink: 0;
  padding: 0;
  border: none;
}
.cover-upload__inner {
  height: 12.5em;
  width: 12.5em;
  border: 1px solid #d3d3d3;
  padding: 0.25em;
}
        `}</style>
      </button>
    )
  }
}

export default CoverInput
