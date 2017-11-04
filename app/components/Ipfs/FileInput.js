import React from 'react'
import { Form } from 'semantic-ui-react'
import putFilesToIpfs from 'scripts/putFilesToIpfs'

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
  fileInputHandler = async (e) => {
    const { onChange } = this.props
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.toggleLoading()
    try {
      const ipfsHash = await putFilesToIpfs(files)
      const value = ipfsHash[0].hash
      onChange(value)
    } catch (error) {
      this.setState({ error: true })
    }
    this.toggleLoading()
  }
  render () {
    const { label, icon, defaultValue, value, onChange } = this.props
    const { loading, error } = this.state
    return (
      <div className='field'>
        <input
          style={{ display: 'none' }}
          ref={(c) => { this.fileInput = c }}
          onChange={this.fileInputHandler}
          type='file'
        />
        <Form.Input
          error={error}
          label={label}
          loading={loading}
          disabled={loading}
          value={value}
          defaultValue={defaultValue}
          icon={icon}
          iconPosition='left'
          placeholder='File hash'
          onChange={
            ({ currentTarget }) => {
              onChange(currentTarget.value)
            }
          }
          action={{
            color: 'teal',
            labelPosition: 'right',
            icon: 'file',
            content: 'Select',
            onClick: () => {
              this.fileInput.click()
            }
          }}
        />
      </div>
    )
  }
}

export default FileInput
