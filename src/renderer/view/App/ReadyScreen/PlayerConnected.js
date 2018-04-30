import { connect } from 'react-redux'

import Player from './Player.jsx'

import {
  isPlayerActive
} from '#selectors'

const mapStateToProps = (...args) => ({
  isActive: isPlayerActive(...args)
})

export default connect(mapStateToProps)(Player)
