import React from 'react'
import MdSync from 'react-icons/lib/md/sync'
import FileInput from '#/FileInput'
import getTracksFromFiles from '~/utils/getTracksFromFiles'

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
    const tracks = await getTracksFromFiles(Array.from(files))
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
