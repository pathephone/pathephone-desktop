import { connect } from 'react-redux';

import {
  isRepeatTurnedOn,
  isShuffleTurnedOn,
} from '#selectors';

import actions from '#actions';

import ControlsRight from './ControlsRight';

const mapStateToProps = state => ({
  isShuffleTurnedOn: isShuffleTurnedOn(state),
  isRepeatTurnedOn: isRepeatTurnedOn(state),
});

const mapDispatchToProps = {
  onToggleShuffle: actions.uiShuffleToggled,
  onToggleRepeat: actions.uiRepeatToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsRight);
