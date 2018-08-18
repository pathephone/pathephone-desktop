import { connect } from 'react-redux';

import selectors from '#selectors';

import actions from '#actions';

import SelectedActions from './SelectedActions';

const mapStateToProps = state => ({
  selectedAlbumsCount: selectors.getDiscoverSelectedCount(state),
});

const mapDispatchToProps = {
  onCancelSelection: actions.uiDiscoverSelectedCanceled,
  onPlaySelected: actions.uiDiscoverSelectedPlayed,
  onAddSelected: actions.uiDiscoverSelectedQueued,
  onDeleteSelected: actions.uiDiscoverSelectedDeleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedActions);
