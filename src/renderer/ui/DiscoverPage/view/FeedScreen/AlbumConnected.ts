import { connect, MapDispatchToProps, MapStateToProps, MergeProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';
import { Album, IAlbumProps } from './Album';
import { discoverPageEvents } from '~renderer/ui/DiscoverPage';

interface IOwnProps {
  albumId: number;
}

interface IStateProps {
  latestAlbums: IDiscoverPageAlbum[];
  selectedAlbums: number[];
  ipfsApiEndpoint: string;
  localCoversCIDs: { [x: string]: boolean };
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  state: IRootState
): IStateProps => ({
  latestAlbums: selectors.getDiscoverFeedAlbumsStrict(state),
  selectedAlbums: selectors.getDiscoverSelectedIds(state),
  ipfsApiEndpoint: selectors.getIpfsApiEndpointStrict(state),
  localCoversCIDs: selectors.getCachedCIDs(state)
});

interface IDispatchProps {
  onAlbumSelected(id: number): void;
  onAlbumDeselected(id: number): void;
  onAddAlbumToPlaylist(cid: string): void;
  onPlayAlbum(cid: string): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = {
  onAlbumSelected: discoverPageEvents.uiDiscoverAlbumSelected,
  onAlbumDeselected: discoverPageEvents.uiDiscoverAlbumDeselected,
  onAddAlbumToPlaylist: discoverPageEvents.uiAlbumQueued,
  onPlayAlbum: discoverPageEvents.uiAlbumPlayed
};

type IMergedProps = IAlbumProps;

const mergeProps: MergeProps<IStateProps, IDispatchProps, IOwnProps, IMergedProps> = (
  stateProps: IStateProps,
  dispatchProps: IDispatchProps,
  ownProps: IOwnProps
): IMergedProps => {
  const {
    latestAlbums,
    selectedAlbums,
    ipfsApiEndpoint,
    localCoversCIDs
  } = stateProps;

  const {
    onAlbumSelected,
    onAlbumDeselected,
    ...restDispatch
  } = dispatchProps;

  const {
    albumId
  } = ownProps;

  const {
    albumTitle,
    albumCid,
    albumArtist,
    albumCoverCid
  } = latestAlbums[albumId];

  const handleSome: (id: number) => boolean = (id: number): boolean => id === albumId;
  const hasSelectedView: boolean = selectedAlbums.some(handleSome);
  const onToggleSelect: (id: number) => void = hasSelectedView ? onAlbumDeselected : onAlbumSelected;
  const albumCoverURL: string = `${ipfsApiEndpoint}/cat?arg=${albumCoverCid}`;
  const isCoverCached: boolean = localCoversCIDs[albumCoverCid] === true;

  return {
    ...restDispatch,
    albumCid,
    albumId,
    albumTitle,
    albumArtist,
    albumCoverURL,
    onToggleSelect,
    hasSelectedView,
    isCoverCached
  };
};

export const AlbumConnected: React.ComponentClass<IOwnProps> = (
  connect<IStateProps, IDispatchProps, IOwnProps, IMergedProps, IRootState>(
    mapStateToProps, mapDispatchToProps, mergeProps
  )(Album)
);
