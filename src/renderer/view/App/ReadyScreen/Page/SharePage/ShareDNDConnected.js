import { connect } from 'react-redux'

import ShareDND from './ShareDND.jsx'
import { isDndActive, isDndProcessing } from '#selectors'
import { uiDndActivated, uiDndDeactivated, uiDndDataRecieved } from '#actions-ui'

const mapStateToProps = (state) => ({
  hasActiveScreen: isDndActive(state),
  hasProcessingScreen: isDndProcessing(state)
})

const mapDispatchToProps = {
  onDndStart: uiDndActivated,
  onDndEnd: uiDndDeactivated,
  onDndChange: uiDndDataRecieved
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareDND)
