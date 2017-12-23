
import React from 'react'

class FileInput extends React.Component {
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
      ...buttonParams
    } = this.props
    return [
      <button
        {...buttonParams}
        key='button'
        onClick={this.handleAddFileClick}
      >
        {children}
      </button>,
      <input
        multiple
        key='input'
        style={{ display: 'none' }}
        ref={c => { this.fileInput = c }}
        onChange={this.handleFileInputChange}
        type='file'
      />
    ]
  }
}

export default FileInput
