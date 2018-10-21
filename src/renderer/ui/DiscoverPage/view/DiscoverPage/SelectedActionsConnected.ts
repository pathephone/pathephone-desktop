import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { SelectedActions } from '~renderer/ui/DiscoverPage/view/DiscoverPage/SelectedActions';
import { discoverPageEvents } from '~renderer/ui/DiscoverPage';

interface IStateProps {
  selectedAlbumsCount: number;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  selectedAlbumsCount: selectors.getDiscoverSelectedCount(state)
});

interface IDispatchProps {
  onCancelSelection(): void;
  onPlaySelected(): void;
  onAddSelected(): void;
  onDeleteSelected(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onCancelSelection: discoverPageEvents.uiDiscoverSelectedCanceled,
  onPlaySelected: discoverPageEvents.uiDiscoverSelectedPlayed,
  onAddSelected: discoverPageEvents.uiDiscoverSelectedQueued,
  onDeleteSelected: discoverPageEvents.uiDiscoverSelectedDeleted
};

export const SelectedActionsConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SelectedActions)
);
