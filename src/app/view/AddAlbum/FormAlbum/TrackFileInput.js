import React from 'react'
import FileInput from '../../_/FileInput'

const getTrackFromFile = async (fileObj) => {
  // TODO: получение метаданных файла
  // TODO: получение cid'а файла
  // return { title, artist, hash }
}

class TrackFileInput extends React.Component {
  state = {
    processing: false
  }
  toggleProcessing () {
    this.setState({
      processing: !this.state.processing
    })
  }
  onChange = async (files) => {
    this.toggleProcessing()
    const { onChange } = this.props
    const filesArray = Array.from(files)
    const tracks = await Promise.all(filesArray.map(getTrackFromFile))
    this.toggleProcessing()
    onChange(tracks)
  }
  render () {
    return (
      <FileInput
        disabled={this.state.processing}
        onChange={this.onChange}
        children='add track files'
      />
    )
  }
}

export default TrackFileInput
