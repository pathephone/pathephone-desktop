import React from 'react'
import propTypes from 'prop-types'

import DiskIcon from '~components/DiskIcon.jsx'

import withIpfsGateway from '~utils/withIpfsGateway'

import './CoverInput.css'

class CoverInput extends React.Component {
  state = {
    fileLink: null,
    ipfsLink: null
  }
  static getDerivedStateFromProps (state, props) {
    let fileLink = null
    let ipfsLink = null
    if (props.value instanceof File) {
      fileLink = URL.createObjectURL(props.value)
    } else
    if (typeof props.value === 'string') {
      ipfsLink = withIpfsGateway(props.value)
    }
    if (ipfsLink !== state.ipfsLink || fileLink !== state.fileLink) {
      return { fileLink, ipfsLink }
    }
  }
  handleClick = () => {
    this.input.click()
  }
  handleChange = e => {
    const { files } = e.target
    if (files.length > 0) {
      const { onChange } = this.props
      onChange(files[0])
    }
  }
  componentWillUnmount () {
    const { fileLink } = this.state
    if (fileLink) {
      URL.revokeObjectURL(fileLink)
    }
  }
  render () {
    const { fileLink, ipfsLink } = this.state
    const coverLink = fileLink || ipfsLink
    return (
      <button
        onClick={this.handleClick}
        className='cover-input__container izi-margin-left'
      >
        <div className='cover-input__inner izi-relative izi-y izi-center'>
          <input
            id='input_add-cover'
            className='cover-input__input'
            name='cover'
            type='file'
            accept='image/*'
            ref={c => { this.input = c }}
            onChange={this.handleChange}
          />
          {
            coverLink ? (
              <img className='izi-fill ipfs-image-container' src={coverLink} />
            ) : (
              <DiskIcon />
            )
          }
        </div>
      </button>
    )
  }
}

CoverInput.propTypes = {
  onChange: propTypes.func.isRequired
}

export default CoverInput
