import { connect } from 'react-redux'

import SharePage from './SharePage.jsx'

import { isSharingInProcess } from '#selectors'
import { uiShareFilesSelected } from '#actions-ui'

const mapStateToProps = state => ({
  hasProcessingScreen: isSharingInProcess(state)
})

const mapDispatchToProps = {
  onFilesSelect: uiShareFilesSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)
