import React from 'react'
import SyncIcon from '@/SyncIcon'
import DiskIcon from '@/DiskIcon'
import ImageContainer from '@/ImageContainer'
import BrokenImageIcon from '@/BrokenImageIcon'
import GetIpfsImage from '@/GetIpfsImage'
import putFilesToIpfs from '~/scripts/putFilesToIpfs'

const checkIsImage = (file) => {
  return file.type.includes('image')
}

export const getImageFromFiles = async (files) => {
  files = files.filter(checkIsImage) // only images
  if (files.length > 0) {
    return (await putFilesToIpfs(files))[0].hash
  }
}

const ImageResolver = ({ data, error, ready }) => {
  if (!ready) {
    return <SyncIcon />
  }
  if (data) {
    return <ImageContainer className='izi-fill' image={data} />
  }
  if (error) {
    return <BrokenImageIcon />
  }
}

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
  render () {
    const { value, name } = this.props
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
              <GetIpfsImage
                hash={value}
                view={ImageResolver}
              />
            ) : (
              <DiskIcon />
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
