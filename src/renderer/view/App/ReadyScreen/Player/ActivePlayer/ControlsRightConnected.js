import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import ControlsRight from './ControlsRight';

const mapStateToProps = state => ({
  isShuffleTurnedOn: selectors.isShuffleTurnedOn(state),
  isRepeatTurnedOn: selectors.isRepeatTurnedOn(state),
});

const mapDispatchToProps = {
  onToggleShuffle: actions.uiShuffleToggled,
  onToggleRepeat: actions.uiRepeatToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsRight);
