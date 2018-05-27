import React from 'react'
import propTypes from 'prop-types'

import putFilesToIpfs from '~utils/putFilesToIpfs'

class IPFSFileInput extends React.Component {
  handleFilesUpload = async (files) => {
    const { onUploadError, onUploadSuccess, onUploadProgress } = this.props
    try {
      const value = await putFilesToIpfs(files, { onProgress: onUploadProgress })
      onUploadSuccess(value)
    } catch (error) {
      onUploadError(error)
    }
  }

  handleFileInputChange = (e) => {
    const { fileFilter } = this.props
    let { files } = e.currentTarget
    if (fileFilter) {
      files = Array.from(files).filter(fileFilter)
    }
    if (files.length === 0) return
    this.handleFilesUpload(files)
  }

  render () {
    const {
      onUploadError, onUploadSuccess, onUploadProgress,
      ...inputProps
    } = this.props
    return (
      <input
        {...inputProps}
        ref={c => { this.handleInputClick = c.click }}
        onChange={this.handleFileInputChange}
        type='file'
      />
    )
  }
}

IPFSFileInput.propTypes = {
  fileFilter: propTypes.func,
  onUploadProgress: propTypes.func,
  onUploadSuccess: propTypes.func.isRequired,
  onUploadError: propTypes.func.isRequired
}

export default IPFSFileInput
