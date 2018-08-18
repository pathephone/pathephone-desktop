import { connect } from 'react-redux';

import Playlist from './Playlist';

import selectors from '#selectors';
import actions from '#actions';

const mapStateToProps = state => ({
  hasTracklist: !selectors.isPlaylistEmpty(state),
});

const mapDispatchToProps = {
  onClearPlaylist: actions.uiPlaylistCleared,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
