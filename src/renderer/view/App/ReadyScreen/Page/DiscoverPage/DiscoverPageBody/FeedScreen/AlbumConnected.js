import { connect } from 'react-redux';

import selectors from '#selectors';

import actions from '#actions';

import Album from './Album';

const mapStateToProps = state => ({
  latestAlbums: selectors.getDiscoverFeedAlbums(state),
  selectedAlbums: selectors.getDiscoverSelectedIds(state),
  ipfsApiEndpoint: selectors.getIpfsApiEndpoint(state),
  localCoversCIDs: selectors.getCachedCIDs(state),
});

const mapDispatchToProps = {
  onAlbumSelected: actions.uiDiscoverAlbumSelected,
  onAlbumDeselected: actions.uiDiscoverAlbumDeselected,
  onAddAlbumToPlaylist: actions.uiAlbumQueued,
  onPlayAlbum: actions.uiAlbumPlayed,
};

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps,
) => {
  const {
    latestAlbums,
    selectedAlbums,
    ipfsApiEndpoint,
    localCoversCIDs,
  } = stateProps;

  const {
    onAlbumSelected,
    onAlbumDeselected,
    ...restDispatch
  } = dispatchProps;

  const {
    albumId,
  } = ownProps;

  const {
    albumTitle,
    albumCid,
    albumArtist,
    albumCoverCid,
  } = latestAlbums[albumId];

  const handleSome = id => id === albumId;
  const hasSelectedView = selectedAlbums.some(handleSome);
  const onToggleSelect = hasSelectedView ? onAlbumDeselected : onAlbumSelected;
  const albumCoverURL = `${ipfsApiEndpoint}/cat?arg=${albumCoverCid}`;
  const isCoverCached = localCoversCIDs[albumCoverCid] === true;
  return {
    ...restDispatch,
    albumCid,
    albumId,
    albumTitle,
    albumArtist,
    albumCoverURL,
    onToggleSelect,
    hasSelectedView,
    isCoverCached,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album);
