import { connect, MapStateToProps, MergeProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { IPlaylistTrackContainerProps, PlaylistTrackContainer } from './PlaylistTrackContainer';
import { IPlaylistRemovedByIndex } from '~renderer/state/domains/playlist/types';
import selectors from '~renderer/state/selectors';

interface IOwnProps {
  index: string;
}

interface IStateProps {
  removedByIndex: IPlaylistRemovedByIndex;
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  (state: IRootState): IStateProps => ({
    removedByIndex: selectors.getPlaylistRemovedByIndex(state)
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
