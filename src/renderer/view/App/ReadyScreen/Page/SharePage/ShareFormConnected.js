import { connect } from 'react-redux'

import ShareForm from './ShareForm.jsx'
import { uiShareFormSubmited, uiShareFormCanceled, uiShareFormChanged, uiShareFormReseted } from '~actions/ui'
import { getShareFormValue, isShareProcessing, getShareCoverSrc } from '#selectors'

const mapStateToProps = (state) => ({
  values: getShareFormValue(state),
  coverSrc: getShareCoverSrc(state),
  isDisabled: isShareProcessing(state)
})

const mapDispatchToProps = {
  onSubmit: uiShareFormSubmited,
  onCancel: uiShareFormCanceled,
  onChange: uiShareFormChanged,
  onReset: uiShareFormReseted
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareForm)
