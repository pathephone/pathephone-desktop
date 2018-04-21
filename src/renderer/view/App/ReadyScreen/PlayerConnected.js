import { connect } from 'react-redux'

import Player from './Player.jsx'

import {
  isTracklistEmpty
} from '#selectors'

const mapStateToProps = (...args) => {
  return {
    isActive: isTracklistEmpty(...args)
  }
}

export default connect(mapStateToProps)(Player)
