import { connect } from 'react-redux';

import Playlist from './Playlist';

import {
  isPlaylistEmpty,
} from '#selectors';

import actions from '#actions';

const mapStateToProps = state => ({
  hasTracklist: !isPlaylistEmpty(state),
});

const mapDispatchToProps = {
  onClearPlaylist: actions.uiPlaylistCleared,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
