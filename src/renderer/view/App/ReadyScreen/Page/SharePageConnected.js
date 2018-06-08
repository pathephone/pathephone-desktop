import { connect } from 'react-redux'

import SharePage from './SharePage.jsx'

import { isShareCandidatesRecieved, isShareProcessing } from '#selectors'
import { uiShareFilesSelected } from '~actions/ui'

const mapStateToProps = state => ({
  hasProcessingScreen: isShareProcessing(state),
  hasEditForm: isShareCandidatesRecieved(state)
})

const mapDispatchToProps = {
  onFilesSelect: uiShareFilesSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)
