import { connect } from 'react-redux';

import PlaylistTrackContainer from './PlaylistTrackContainer';
import { playlistSelectors } from '~renderer/ui/Playlist';

const mapStateToProps = (_, ownProps) => state => ({
  isRemoved: !!playlistSelectors.getPlaylistRemovedByIndex(state)[ownProps.index],
});

export default connect(mapStateToProps)(PlaylistTrackContainer);
