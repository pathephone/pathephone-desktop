import { connect } from 'react-redux';

import selectors from '#selectors';

import PlaylistTrackContainer from './PlaylistTrackContainer';

const mapStateToProps = (_, ownProps) => state => ({
  isRemoved: !!selectors.getPlaylistRemovedByIndex(state)[ownProps.index],
});

export default connect(mapStateToProps)(PlaylistTrackContainer);
