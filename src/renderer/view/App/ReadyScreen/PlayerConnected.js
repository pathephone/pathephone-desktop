import { connect } from 'react-redux'

import Player from './Player'

import {
  isTracklistEmpty
} from '~/selectors'

const mapStateToProps = (...args) => {
  return {
    isActive: isTracklistEmpty(...args)
  }
}

export default connect(mapStateToProps)(Player)
