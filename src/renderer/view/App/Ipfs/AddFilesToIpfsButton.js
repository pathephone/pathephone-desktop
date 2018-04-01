
import React from 'react'
import putFilesToIpfs from '../../scripts/putFilesToIpfs'

class AddFileToIpfsButton extends React.Component {
  handleAddFileClick = () => {
    this.fileInput.click()
  }
  handleFileInputChange = async (e) => {
    const { onError, onSuccess, onLoading } = this.props
    let { files } = e.currentTarget
    if (this.props.fileFilter) { files = Array.from(files).filter(this.props.fileFilter) }
    if (files.length === 0) return
    onLoading()
    try {
      const value = await putFilesToIpfs(files)
      onSuccess(value)
    } catch (error) {
      onError(error)
    }
  }
  render () {
    const {
      children,
      onError, onSuccess, onLoading,
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
        key='input'
        style={{ display: 'none' }}
        ref={c => { this.fileInput = c }}
        onChange={this.handleFileInputChange}
        type='file'
      />
    ]
  }
}

export default AddFileToIpfsButton
