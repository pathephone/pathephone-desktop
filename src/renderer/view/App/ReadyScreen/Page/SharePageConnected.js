import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import SharePage from './SharePage';

const mapStateToProps = state => ({
  hasProcessingScreen: selectors.isShareProcessing(state),
  hasEditForm: selectors.isShareCandidatesRecieved(state),
});

const mapDispatchToProps = {
  onFilesSelect: actions.uiShareItemsSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
