import { connect, MapDispatchToProps, MapStateToProps, MergeProps } from 'react-redux';

import { ICachedCIDsState } from '~renderer/state/domains/cachedCIDs';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { playlistEvents, playlistSelectors } from '~renderer/ui/Playlist';
import { IPlaylistTracksByIndex } from '~renderer/ui/Playlist/types';
import { IPlaylistTrackProps, PlaylistTrack } from '~renderer/ui/Playlist/view/Playlist/PlaylistTrack';

interface IOwnProps {
  index: string;
}

interface IStateProps {
  currentTrackIndex: string | null;
  tracksByIndex: IPlaylistTracksByIndex;
  cachedCIDs: ICachedCIDsState;
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  state: IRootState
): IStateProps => ({
  currentTrackIndex: playlistSelectors.getCurrentTrackIndex(state),
  tracksByIndex: playlistSelectors.getPlaylistTracksByIndex(state),
  cachedCIDs: selectors.getCachedCIDs(state)
});

interface IDispatchProps {
  onPlayTrack(t: string): void;
  onRemoveTrack(t: string): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = {
  onPlayTrack: playlistEvents.uiPlaylistTrackPlayed,
  onRemoveTrack: playlistEvents.uiPlaylistTrackRemoved
};

const mergeProps: MergeProps<IStateProps, IDispatchProps, IOwnProps, IPlaylistTrackProps> = (
  stateProps: IStateProps, dispatchProps: IDispatchProps, ownProps: IOwnProps
): IPlaylistTrackProps => {
  const { cachedCIDs, tracksByIndex, currentTrackIndex } = stateProps;
  const { index } = ownProps;
  const { audio, ...trackData } = tracksByIndex[index];

  return {
    ...trackData,
    isCurrent: index === currentTrackIndex,
    isDownloaded: !!cachedCIDs[audio],
    order: index,
    onPlayClick(): void {
      dispatchProps.onPlayTrack(index);
    },
    onRemoveClick(): void {
      dispatchProps.onRemoveTrack(index);
    }
  };
};

export const PlaylistTrackConnected: React.ComponentClass<IOwnProps> = (
  connect<IStateProps, IDispatchProps, IOwnProps, IPlaylistTrackProps>(
    mapStateToProps, mapDispatchToProps, mergeProps
  )(PlaylistTrack)
);
