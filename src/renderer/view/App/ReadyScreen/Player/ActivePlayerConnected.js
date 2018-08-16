import { connect } from 'react-redux';

import ActivePlayer from './ActivePlayer';
import { systemAudioEnded, systemAudioPlayed, systemAudioPaused } from '~actions/system';
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
  onAudioEnded: systemAudioEnded,
  onAudioPlayed: systemAudioPlayed,
  onAudioPaused: systemAudioPaused,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer);
