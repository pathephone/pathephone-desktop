import React from 'react'
import putFilesToIpfs from '../../scripts/putFilesToIpfs'

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
  handleFileInputChange = e => {
    const { value } = e.currentTarget
    this.props.onChange(value)
  }
  handleFileInputChange = async (e) => {
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.toggleLoading()
    try {
      const ipfsHash = await putFilesToIpfs(files)
      const value = ipfsHash[0].hash
      this.textInput.value = value
      this.props.onChange(value)
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
      value,
      name,
      placeholder = "File's CID",
      onChange,
      containerProps = defaultContainerProps
    } = this.props
    const { loading, error } = this.state
    return (
      <div {...defaultContainerProps}>
        <input
          ref={(c) => { this.textInput = c }}
          name={name}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button onClick={this.handleAddFileClick}>
          add file
        </button>
        <input
          style={{ display: 'none' }}
          ref={(c) => { this.fileInput = c }}
          onChange={this.handleFileInputChange}
          type='file'
        />
      </div>
    )
  }
}

export default FileInput
