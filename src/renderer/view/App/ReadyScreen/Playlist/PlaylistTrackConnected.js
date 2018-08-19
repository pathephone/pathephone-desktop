import { connect } from 'react-redux';

import actions from '#actions';
import selectors from '#selectors';

import PlaylistTrack from './PlaylistTrack';

const mapStateToProps = state => ({
  currentTrackIndex: selectors.getCurrentTrackIndex(state),
  tracksByIndex: selectors.getPlaylistTracksByIndex(state),
  cachedCIDs: selectors.getCachedCIDs(state),
});

const mapDispatchToProps = {
  onPlayTrack: actions.uiPlaylistTrackPlayed,
  onRemoveTrack: actions.uiPlaylistTrackRemoved,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { cachedCIDs, tracksByIndex, currentTrackIndex } = stateProps;
  const { index } = ownProps;
  const { audio, ...trackData } = tracksByIndex[index];
  return {
    ...trackData,
    isCurrent: index === currentTrackIndex,
    isDownloaded: !!cachedCIDs[audio],
    order: index,
    onPlayClick() {
      dispatchProps.onPlayTrack(index);
    },
    onRemoveClick() {
      dispatchProps.onRemoveTrack(index);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlaylistTrack);
