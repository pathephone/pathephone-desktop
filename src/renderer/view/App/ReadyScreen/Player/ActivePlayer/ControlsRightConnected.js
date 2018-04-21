import { connect } from 'react-redux'

import {
  isRepeatTurnedOn,
  isShuffleTurnedOn
} from '#selectors'

import {
  toggleRepeat,
  toggleShuffle
} from '#actions'

import ControlsRight from './ControlsRight.jsx'

const mapStateToProps = (state) => ({
  isShuffleTurnedOn: isShuffleTurnedOn(state),
  isRepeatTurnedOn: isRepeatTurnedOn(state)
})

const mapDispatchToProps = {
  onToggleShuffle: toggleShuffle,
  onToggleRepeat: toggleRepeat
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlsRight)
