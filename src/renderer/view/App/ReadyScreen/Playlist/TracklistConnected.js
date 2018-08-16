import { connect } from 'react-redux';

import Tracklist from './Tracklist';

import {
  getPlaylistTracksIndexes,
} from '#selectors';

const mapStateToProps = state => ({
  tracksIndexes: getPlaylistTracksIndexes(state),
});

export default connect(mapStateToProps)(Tracklist);
