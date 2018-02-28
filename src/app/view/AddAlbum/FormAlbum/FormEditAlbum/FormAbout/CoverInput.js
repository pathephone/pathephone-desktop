import React from 'react'
import SyncIcon from '#/SyncIcon'
import DiskIcon from '#/DiskIcon'
import ImageContainer from '#/ImageContainer'
import BrokenImageIcon from '#/BrokenImageIcon'
import GetIpfsImage from '#/GetIpfsImage'

import getCoverFromFiles from '~/utils/getCoverFromFiles'
import checkIsImage from '~/utils/checkIsImage'

import './CoverInput.css'

const ImageResolver = ({ data, error, ready }) => {
  if (!ready) {
    return <SyncIcon />
  }
  if (data) {
    return <ImageContainer className='izi-fill ipfs-image-container' image={data} />
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
      this.handleFiles(files)
    }
  }
  handleFiles = async (files) => {
    const { onChange } = this.props
    try {
      const imageHash = await getCoverFromFiles(Array.from(files))
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
        className='cover-input__container izi-margin-left'
      >
        <div className='cover-input__inner izi-relative izi-y izi-center'>
          <input
            className='cover-input__input'
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
      </button>
    )
  }
}

export default CoverInput
