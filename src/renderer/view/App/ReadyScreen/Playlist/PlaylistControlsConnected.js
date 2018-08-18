import { connect } from 'react-redux';

import actions from '#actions';

import PlaylistControls from './PlaylistControls';

const mapDispatchToProps = {
  onClearPlaylist: actions.uiPlaylistCleared,
};

export default connect(null, mapDispatchToProps)(PlaylistControls);
