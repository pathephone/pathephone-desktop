import React from 'react'
import propTypes from 'prop-types'

class CustomFileInput extends React.Component {
  handleAddFileClick = () => {
    this.fileInput.click()
  }
  handleFileInputChange = async (e) => {
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.props.onChange(files)
  }
  render () {
    const {
      children,
      id,
      name,
      multiple,
      accept,
      ...buttonParams
    } = this.props
    return (
      <React.Fragment>
        <button
          {...buttonParams}
          onClick={this.handleAddFileClick}
        >
          {children}
        </button>
        <input
          multiple={multiple}
          id={id}
          name={name}
          accept={accept}
          type='file'
          style={{ display: 'none' }}
          ref={c => { this.fileInput = c }}
          onChange={this.handleFileInputChange}
        />
      </React.Fragment>
    )
  }
}

CustomFileInput.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  accept: propTypes.string,
  multiple: propTypes.bool,
  children: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired
}

export default CustomFileInput
