import { connect } from 'react-redux';

import {
  isPaused,
} from '#selectors';

import actions from '#actions';

import ControlsLeft from './ControlsLeft';

const mapStateToProps = state => ({
  hasPauseIcon: !isPaused(state),
});

const mapDispatchToProps = {
  onPlayNextClick: actions.uiNextTrackPlayed,
  onPlayPreviousClick: actions.uiPreviousTrackPlayed,
  onPlaybackToggle: actions.uiPlaybackToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsLeft);
