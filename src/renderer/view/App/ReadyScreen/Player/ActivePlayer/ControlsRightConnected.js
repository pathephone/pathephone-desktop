import { connect } from 'react-redux'

import {
  isRepeatTurnedOn,
  isShuffleTurnedOn
} from '#selectors'

import {
  uiShuffleToggled,
  uiRepeatToggled
} from '#actions-ui'

import ControlsRight from './ControlsRight.jsx'

const mapStateToProps = (state) => ({
  isShuffleTurnedOn: isShuffleTurnedOn(state),
  isRepeatTurnedOn: isRepeatTurnedOn(state)
})

const mapDispatchToProps = {
  onToggleShuffle: uiShuffleToggled,
  onToggleRepeat: uiRepeatToggled
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlsRight)
