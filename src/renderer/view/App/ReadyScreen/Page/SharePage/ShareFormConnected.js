import { connect } from 'react-redux';

import actions from '#actions';
import selectors from '#selectors';

import ShareForm from './ShareForm';

const mapStateToProps = state => ({
  values: selectors.getShareFormValue(state),
  coverSrc: selectors.getShareCoverSrc(state),
  isDisabled: selectors.isShareProcessing(state),
});

const mapDispatchToProps = {
  onSubmit: actions.uiShareFormSubmited,
  onCancel: actions.uiShareFormCanceled,
  onChange: actions.uiShareFormChanged,
  onReset: actions.uiShareFormReseted,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareForm);
