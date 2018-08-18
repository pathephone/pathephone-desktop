import { connect } from 'react-redux';

import ShareForm from './ShareForm';
import actions from '#actions';
import { getShareFormValue, isShareProcessing, getShareCoverSrc } from '#selectors';

const mapStateToProps = state => ({
  values: getShareFormValue(state),
  coverSrc: getShareCoverSrc(state),
  isDisabled: isShareProcessing(state),
});

const mapDispatchToProps = {
  onSubmit: actions.uiShareFormSubmited,
  onCancel: actions.uiShareFormCanceled,
  onChange: actions.uiShareFormChanged,
  onReset: actions.uiShareFormReseted,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareForm);
