import { connect } from 'react-redux'

import ShareForm from './ShareForm.jsx'
import { uiShareFormSubmited, uiShareFormCanceled, uiShareFormChanged } from '#actions-ui'
import { getShareFormValue, isShareProcessing } from '#selectors'

const mapStateToProps = (state) => ({
  values: getShareFormValue(state),
  isDisabled: isShareProcessing(state)
})

const mapDispatchToProps = {
  onSubmit: uiShareFormSubmited,
  onCancel: uiShareFormCanceled,
  onChange: uiShareFormChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareForm)
