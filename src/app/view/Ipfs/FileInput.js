import React from 'react'
import putFilesToIpfs from '../../scripts/putFilesToIpfs'
import Input from '../_/Input'

const defaultContainerProps = {
  className: 'izi-x'
}

class FileInput extends React.Component {
  state = {
    loading: false,
    error: false
  }
  toggleLoading () {
    this.setState({
      loading: !this.state.loading
    })
  }
  handleManualInputChange = e => {
    const { name, value } = e.currentTarget
    this.props.onChange(value, name)
  }
  handleFileInputChange = async (e) => {
    const { name, onChange } = this.props
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.toggleLoading()
    try {
      const ipfsHash = await putFilesToIpfs(files)
      this.fileForm.reset()
      const value = ipfsHash[0].hash
      this.textInput.value = value
      onChange(value, name)
    } catch (error) {
      this.setState({ error: true })
    }
    this.toggleLoading()
  }
  handleAddFileClick = () => {
    this.fileInput.click()
  }
  render () {
    const {
      defaultValue,
      name,
      placeholder = "File's CID",
      containerProps = defaultContainerProps
    } = this.props
    const { loading, error } = this.state
    return (
      <div {...defaultContainerProps}>
        <input
          style={{ flexBasis: '100%' }}
          disabled={loading}
          ref={(c) => { this.textInput = c }}
          name={name}
          type='text'
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={this.handleManualInputChange}
        />
        <button
          style={{ flexShrink: '0' }}
          onClick={this.handleAddFileClick}
        >
          add file
        </button>
        <form ref={(c) => { this.fileForm = c }}>
          <input
            style={{ display: 'none' }}
            ref={(c) => { this.fileInput = c }}
            onChange={this.handleFileInputChange}
            type='file'
          />
        </form>
      </div>
    )
  }
}

export default FileInput
