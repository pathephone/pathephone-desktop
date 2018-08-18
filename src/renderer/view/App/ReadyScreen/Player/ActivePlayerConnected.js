import { connect } from 'react-redux';

import actions from '#actions';
import selectors from '#selectors';

import ActivePlayer from './ActivePlayer';

const mapStateToProps = (state) => {
  const { title, artist } = selectors.getCurrentTrack(state);
  return {
    title,
    artist,
    source: selectors.getCurrentTrackSource(state),
    volume: selectors.getVolume(state),
    isPaused: selectors.isPaused(state),
  };
};

const mapDispatchToProps = {
  onAudioEnded: actions.systemAudioEnded,
  onAudioPlayed: actions.systemAudioPlayed,
  onAudioPaused: actions.systemAudioPaused,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer);
