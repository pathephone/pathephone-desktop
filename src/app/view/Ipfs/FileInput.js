import React from 'react'
import AddFileToIpfsButton from './AddFilesToIpfsButton'

class FileInput extends React.Component {
  state = {
    loading: false
  }
  setLoading = (value) => {
    this.setState({
      loading: value
    })
  }

  onFileError = () => {
    this.setLoading(false)
  }
  onFileLoading = () => {
    this.setLoading(true)
  }
  onFileAdded = (value) => {
    this.setLoading(false)
    this.textInput.value = value[0].hash
    const event = new Event('change')
    this.textInput.dispatchEvent(event)
  }
  render () {
    const { loading } = this.state
    return (
      <span className='izi-xs izi-fill-width'>
        <input
          {...this.props}
          style={{ flexBasis: '100%' }}
          disabled={loading}
          ref={c => { this.textInput = c }}
          type='text'
          onChange={this.props.onChange}
        />
        <AddFileToIpfsButton
          style={{ flexShrink: '0' }}
          disabled={loading}
          onSuccess={this.onFileAdded}
          onError={this.onFileError}
          onLoading={this.onFileLoading}
          fileFilter={this.props.fileFilter}
          children='chose file'
        />
      </span>
    )
  }
}

export default FileInput

/*
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
      let ipfsHashes = await putFilesToIpfs(files)
      ipfsHashes = ipfsHashes.map(({hash}, index) => ({
        hash,
        file: files[index]
      }))
      onChange(ipfsHashes)
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
*/
