import { connect } from 'react-redux';

import PlaylistControls from './PlaylistControls';
import { playlistEvents } from '~renderer/ui/Playlist';

const mapDispatchToProps = {
  onClearPlaylist: playlistEvents.uiPlaylistCleared,
};

export default connect(null, mapDispatchToProps)(PlaylistControls);
