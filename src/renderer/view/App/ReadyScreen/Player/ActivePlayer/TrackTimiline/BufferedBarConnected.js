import { connect } from 'react-redux'

import {
  getAudioBufferedMap
} from '#selectors'

import BufferedBar from './BufferedBar.jsx'

const mapStateToProps = state => ({
  bufferedMap: getAudioBufferedMap(state)
})

export default connect(mapStateToProps)(BufferedBar)
