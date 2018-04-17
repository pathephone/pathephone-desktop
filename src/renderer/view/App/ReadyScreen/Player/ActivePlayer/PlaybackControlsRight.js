import { connect } from 'react-redux'

import {
  isRepeatTurnedOn,
  isShuffleTurnedOn
} from '~/selectors'

import {
  toggleRepeat,
  toggleShuffle
} from '~/actions'

import PlaybackControls from './PlaybackControlsLeft/PlaybackControlsLeft'

const mapStateToProps = (state) => ({
  isShuffleTurnedOn: isShuffleTurnedOn(state),
  isRepeatTurnedOn: isRepeatTurnedOn(state)
})

const mapDispatchToProps = {
  onToggleShuffle: toggleShuffle,
  onToggleRepeat: toggleRepeat
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls)
