import React from 'react';
import propTypes from 'prop-types';

import getBufferedAudioMap from '~shared/utils/getBufferedAudioMap';

import ProgressBar from './ActivePlayer/ProgressBar';
import TrackBar from './ActivePlayer/TrackBar';
import ControlsLeftConnected from './ActivePlayer/ControlsLeftConnected';
import VolumeInputConnected from './ActivePlayer/VolumeInputConnected';
import ControlsRightConnected from './ActivePlayer/ControlsRightConnected';
import e2e from '~shared/data/e2e';

const getInitialState = () => ({
  duration: null,
  currentTime: 0,
  bufferedMap: null,
  isReadyToPlay: false,
});

class ActivePlayer extends React.Component {
  audio = new Audio()

  state = getInitialState()

  componentWillMount() {
    this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.addEventListener('canplaythrough', this.handleCanPlayThrough);
    this.audio.addEventListener('progress', this.handleProgress);
    this.audio.addEventListener('ended', this.handleEnded);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
    this.handleProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.audio.src !== nextProps.source) {
      this.setState(getInitialState());
    }
    this.handleProps(nextProps);
  }

  componentWillUnmount() {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.removeEventListener('canplaythrough', this.handleCanPlayThrough);
    this.audio.removeEventListener('progress', this.handleProgress);
    this.audio.removeEventListener('ended', this.handleEnded);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.src = '';
  }

  handleProps = (props) => {
    const { source = '', volume, isPaused } = props;
    if (this.audio.volume !== volume) {
      this.audio.volume = volume;
    }
    if (this.audio.src !== source) {
      this.audio.src = source;
    }
    if (!isPaused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  handleCanPlayThrough = () => {
    this.setState(state => ({ ...state, isReadyToPlay: true }));
  }

  handleLoadedMetadata = () => {
    const { duration } = this.audio;
    this.setState(state => ({ ...state, duration }));
  }

  handleProgress = () => {
    const bufferedMap = getBufferedAudioMap(this.audio);
    if (bufferedMap) {
      this.setState(state => ({ ...state, bufferedMap }));
    }
  }

  handleEnded = () => {
    this.props.onAudioEnded();
  }

  handleTimeUpdate = () => {
    const { currentTime } = this.audio;
    this.setState(state => ({ ...state, currentTime }));
  }

  handleStopSeeking = (time) => {
    this.audio.currentTime = time;
  }

  render() {
    const {
      isReadyToPlay,
      currentTime,
      duration,
      bufferedMap,
    } = this.state;
    const { title, artist } = this.props;
    return (
      <div
        id={e2e.PLAYER_ACTIVE_ID}
        className="player"
      >
        <ControlsLeftConnected />
        {
          isReadyToPlay ? (
            <TrackBar
              title={title}
              artist={artist}
              currentTime={currentTime}
              duration={duration}
              onStopSeeking={this.handleStopSeeking}
              bufferedMap={bufferedMap}
            />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInputConnected />
        <ControlsRightConnected />
      </div>
    );
  }
}

ActivePlayer.propTypes = {
  onAudioEnded: propTypes.func.isRequired,
  volume: propTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  isPaused: propTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  source: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
};

export default ActivePlayer;
