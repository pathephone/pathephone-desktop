import React from 'react'
import FileInput from '../../_/FileInput'
import readID3 from '../../../utils/id3'
import putFilesToIpfs from '../../../scripts/putFilesToIpfs'

const checkIsAudio = (file) => {
  return file.type.includes('audio')
}

export const getAudioTracksFromFiles = async (files) => {
  files = files.filter(checkIsAudio) // use only audio files

  const hashes = await putFilesToIpfs(files)
  return Promise.all(hashes.map(async ({hash}, index) => {
    const file = files[index]
    try {
      const {title, album, artist} = await readID3(file)
      return {title, album, artist, hash}
    } catch (e) {
      return {hash}
    }
  }))
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
    const { onNewTracks } = this.props
    const tracks = await getAudioTracksFromFiles(Array.from(files))
    this.toggleProcessing()
    onNewTracks(tracks)
  }
  render () {
    return (
      <FileInput
        id='input_add-tracks'
        disabled={this.state.processing}
        onChange={this.onChange}
        children='add tracks'
      />
    )
  }
}

export default TrackFileInput
