import { connect } from 'react-redux';

import ActivePlayer from './ActivePlayer';
import actions from '#actions';
import {
  getCurrentTrackSource, getVolume, isPaused, getCurrentTrack,
} from '#selectors';

const mapStateToProps = (state) => {
  const { title, artist } = getCurrentTrack(state);
  return {
    title,
    artist,
    source: getCurrentTrackSource(state),
    volume: getVolume(state),
    isPaused: isPaused(state),
  };
};

const mapDispatchToProps = {
  onAudioEnded: actions.systemAudioEnded,
  onAudioPlayed: actions.systemAudioPlayed,
  onAudioPaused: actions.systemAudioPaused,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer);
