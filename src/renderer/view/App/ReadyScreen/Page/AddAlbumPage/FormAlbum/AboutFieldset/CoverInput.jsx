import React from 'react'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

import DiskIcon from '~components/DiskIcon.jsx'

import withIpfsGateway from '~utils/withIpfsGateway'

import './CoverInput.css'

class CoverInput extends React.Component {
  handleClick = () => {
    this.input.click()
  }
  handleChange = e => {
    if (e.target.files.length > 0) {
      const { input } = this.props
      const { onChange } = input
      onChange(e.target.files[0])
    }
  }
  render () {
    const { input } = this.props
    const { onChange, value, ...rest } = input
    return (
      <button
        onClick={this.handleClick}
        className='cover-input__container izi-margin-left'
      >
        <div className='cover-input__inner izi-relative izi-y izi-center'>
          <input
            {...rest}
            id='input_add-cover'
            className='cover-input__input'
            type='file'
            accept='image/*'
            ref={c => { this.input = c }}
            onChange={this.handleChange}
          />
          {
            (typeof value === 'string' && value) ? (
              <img className='izi-fill ipfs-image-container' src={withIpfsGateway(value)} />
            ) : (value instanceof File) ? (
              <img className='izi-fill ipfs-image-container' src={URL.createObjectURL(value)} />
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
