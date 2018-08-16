import { connect } from 'react-redux';

import {
  isPaused,
} from '#selectors';

import {
  uiNextTrackPlayed,
  uiPreviousTrackPlayed,
  uiPlaybackToggled,
} from '~actions/ui';

import ControlsLeft from './ControlsLeft';

const mapStateToProps = state => ({
  hasPauseIcon: !isPaused(state),
});

const mapDispatchToProps = {
  onPlayNextClick: uiNextTrackPlayed,
  onPlayPreviousClick: uiPreviousTrackPlayed,
  onPlaybackToggle: uiPlaybackToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsLeft);
