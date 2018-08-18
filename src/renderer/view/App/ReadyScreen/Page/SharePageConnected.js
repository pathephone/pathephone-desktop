import { connect } from 'react-redux';

import SharePage from './SharePage';

import { isShareCandidatesRecieved, isShareProcessing } from '#selectors';
import actions from '#actions';

const mapStateToProps = state => ({
  hasProcessingScreen: isShareProcessing(state),
  hasEditForm: isShareCandidatesRecieved(state),
});

const mapDispatchToProps = {
  onFilesSelect: actions.uiShareItemsSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
