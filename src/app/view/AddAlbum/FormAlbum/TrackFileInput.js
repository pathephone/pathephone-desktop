import React from 'react'
import MdSync from 'react-icons/lib/md/sync'
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
      const {title, album, artist, bitrate} = await readID3(file)
      return {title, album, artist, bitrate, hash}
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
    const { processing } = this.state
    return (
      <div>
        <FileInput
          id='input_add-tracks'
          disabled={processing}
          onChange={this.onChange}
          children={
            !processing ? 'add tracks' : <span>processing <MdSync className='rotating' /></span>
          }
          className='square-button'
        />
      </div>
    )
  }
}

export default TrackFileInput
