import { connect } from 'react-redux'

import {
  isAudioReadyToPlay
} from '#selectors'

import ActivePlayer from './ActivePlayer.jsx'

const mapStateToProps = (...args) => ({
  isAudioReadyToPlay: isAudioReadyToPlay(...args)
})

export default connect(mapStateToProps)(ActivePlayer)
