import React from 'react'
import propTypes from 'prop-types'

import DiskIcon from '~components/DiskIcon.jsx'
import IPFSFileInput from '~components/Ipfs/FileInput.jsx'

import withIpfsGateway from '~utils/withIpfsGateway'

import './CoverInput.css'

class CoverInput extends React.Component {
  handleFinishUpload = ([ coverCid ]) => {
    const { onChange } = this.props.input
    onChange(coverCid)
  }
  render () {
    const { value } = this.props.input
    return (
      <button
        onClick={this.handleClick}
        className='cover-input__container izi-margin-left'
      >
        <div className='cover-input__inner izi-relative izi-y izi-center'>
          <IPFSFileInput
            id='input_add-cover'
            className='cover-input__input'
            accept='image/*'
            ref={({ handleClick }) => { this.handleClick = handleClick }}
            onFinishUpload={this.handleFinishUpload}
          />
          {
            value ? (
              <img className='izi-fill ipfs-image-container' src={withIpfsGateway(value)} />
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
  input: propTypes.object.isRequired
}

export default CoverInput
