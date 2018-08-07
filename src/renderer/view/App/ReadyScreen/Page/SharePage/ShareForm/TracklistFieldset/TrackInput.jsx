import React from 'react'
import propTypes from 'prop-types'

import MdDec from 'react-icons/lib/md/blur-on'
import MdFile from 'react-icons/lib/md/insert-drive-file'

import {
  LOCAL_ARTIST,
  LOCAL_TITLE,
  LOCAL_TRACK_TITLE,
  LOCAL_TRACK_ARTIST
} from '~data/i18nConstants'

import CustomTextInput from '~components/CustomTextInput.jsx'

import TrackControlsLeft from './TrackControlsLeft.jsx'
import TrackControlsRight from './TrackControlsRight.jsx'

import './TrackInput.css'

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
      cid,
      isMoveUpDisabled,
      isMoveDownDisabled
    } = this.props
    return (
      <div className='trackInput'>
        <div className='trackInputControlsLeft'>
          <TrackControlsLeft
            onMoveUpClick={this.handleMoveUp}
            onMoveDownClick={this.handleMoveDown}
            isMoveDownDisabled={isMoveDownDisabled}
            isMoveUpDisabled={isMoveUpDisabled}
          />
        </div>
        <div className='trackInputBody'>
          <div className='trackInputSplit'>
            <label>
              {LOCAL_ARTIST}<br />
              <CustomTextInput
                name={`tracks.${index}.artist`}
                placeholder={LOCAL_TRACK_ARTIST}
              />
            </label>
            <label>
              {LOCAL_TITLE}<br />
              <CustomTextInput
                name={`tracks.${index}.title`}
                placeholder={LOCAL_TRACK_TITLE}
              />
            </label>
          </div>
          <br />
          {
            fileName ? (
              <span>
                <MdFile /> <span>{fileName}</span>
              </span>
            ) : (
              <span>
                <MdDec /> {cid}
              </span>
            )
          }
        </div>
        <div className='trackInputControlsRight'>
          <TrackControlsRight
            onRemoveClick={this.handleRemove}
          />
        </div>
      </div>
    )
  }
}

TrackInput.propTypes = {
  index: propTypes.number.isRequired,
  fileName: propTypes.string,
  cid: propTypes.string,
  onRemoveTrack: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func.isRequired,
  onMoveTrackDown: propTypes.func.isRequired,
  isMoveDownDisabled: propTypes.bool.isRequired,
  isMoveUpDisabled: propTypes.bool.isRequired
}

export default TrackInput
