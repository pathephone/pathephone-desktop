import React from 'react'
import FileInput from '../../_/FileInput'
import readID3 from '../../../utils/id3'
import putFilesToIpfs from '../../../scripts/putFilesToIpfs'

const getTracksFromFiles = async (files) => {
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
    const tracks = await getTracksFromFiles(files)
    this.toggleProcessing()
    onNewTracks(tracks)
  }
  render () {
    return (
      <FileInput
        disabled={this.state.processing}
        onChange={this.onChange}
        children='add tracks'
      />
    )
  }
}

export default TrackFileInput
