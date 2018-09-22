import { connect } from 'react-redux';

import Playlist from './Playlist';
import selectors from '~renderer/state/selectors';

const mapStateToProps = state => ({
  hasTracklist: !selectors.isPlaylistEmpty(state),
});

const PlaylistConnected = connect(mapStateToProps)(Playlist);

export default PlaylistConnected;
