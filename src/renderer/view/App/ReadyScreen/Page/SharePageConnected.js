import { connect } from 'react-redux';

import SharePage from './SharePage.jsx';

import { isShareCandidatesRecieved, isShareProcessing } from '#selectors';
import { uiShareItemsSelected } from '~actions/ui';

const mapStateToProps = state => ({
  hasProcessingScreen: isShareProcessing(state),
  hasEditForm: isShareCandidatesRecieved(state),
});

const mapDispatchToProps = {
  onFilesSelect: uiShareItemsSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
