import { connect } from 'react-redux'

import Player from './Player.jsx'

import {
  isPlayerActive
} from '#selectors'

const mapStateToProps = state => ({
  isActive: isPlayerActive(state)
})

export default connect(mapStateToProps)(Player)
