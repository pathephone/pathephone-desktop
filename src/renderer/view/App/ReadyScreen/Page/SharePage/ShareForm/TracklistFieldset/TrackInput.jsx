import React from 'react'
import propTypes from 'prop-types'

import TrackControls from './TrackControls.jsx'

class TrackInput extends React.PureComponent {
  handleRemove = () => {
    const { index, onRemoveTrack } = this.props
    onRemoveTrack(index)
  }
  handleMoveDown = () => {
    const { index, onMoveTrackDown } = this.props
    onMoveTrackDown(index)
  }
  handleMoveUp = () => {
    const { index, onMoveTrackUp } = this.props
    onMoveTrackUp(index)
  }
  render () {
    const {
      index,
      fileName,
      isMoveUpDisabled,
      isMoveDownDisabled
    } = this.props
    return (
      <React.Fragment>
        <div className='izi-xs '>
          <div className='izi-ys izi-fill-width'>
            <input
              name={`tracks.${index}.artist`}
              placeholder='artist'
            />
            <input
              name={`tracks.${index}.title`}
              placeholder='title'
            />
            <label>
              {fileName}
            </label>
          </div>
          <TrackControls
            onRemoveClick={this.handleRemove}
            onMoveUpClick={this.handleMoveUp}
            onMoveDownClick={this.handleMoveDown}
            isMoveDownDisabled={isMoveDownDisabled}
            isMoveUpDisabled={isMoveUpDisabled}
          />
        </div>
        <hr key='separator' />
      </React.Fragment>
    )
  }
}

TrackInput.propTypes = {
  index: propTypes.number.isRequired,
  fileName: propTypes.string.isRequired,
  onRemoveTrack: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func.isRequired,
  onMoveTrackDown: propTypes.func.isRequired,
  isMoveDownDisabled: propTypes.bool.isRequired,
  isMoveUpDisabled: propTypes.bool.isRequired
}

export default TrackInput
