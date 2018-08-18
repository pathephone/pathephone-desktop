import { connect } from 'react-redux';

import selectors from '#selectors';

import Tracklist from './Tracklist';


const mapStateToProps = state => ({
  tracksIndexes: selectors.getPlaylistTracksIndexes(state),
});

export default connect(mapStateToProps)(Tracklist);
