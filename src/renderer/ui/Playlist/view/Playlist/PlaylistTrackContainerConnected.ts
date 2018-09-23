import { connect, MapStateToProps, MergeProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { playlistSelectors } from '~renderer/ui/Playlist';
import { IPlaylistRemovedByIndex } from '~renderer/ui/Playlist/types';
import { IPlaylistTrackContainerProps, PlaylistTrackContainer } from './PlaylistTrackContainer';

interface IOwnProps {
  index: string;
}

interface IStateProps {
  removedByIndex: IPlaylistRemovedByIndex;
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  (state: IRootState): IStateProps => ({
    removedByIndex: playlistSelectors.getPlaylistRemovedByIndex(state)
  })
);

const mergeProps: MergeProps<IStateProps, void, IOwnProps, IPlaylistTrackContainerProps> = (
  stateProps: IStateProps, dispatchProps: void, ownProps: IOwnProps
): IPlaylistTrackContainerProps => ({
  isRemoved: !!stateProps.removedByIndex[ownProps.index],
  index: ownProps.index
});

export const PlaylistTrackContainerConnected: React.ComponentClass<IOwnProps> = (
  connect<IStateProps, void, IOwnProps, IPlaylistTrackContainerProps, IRootState>(
    mapStateToProps, void 0, mergeProps
  )(PlaylistTrackContainer)
);
