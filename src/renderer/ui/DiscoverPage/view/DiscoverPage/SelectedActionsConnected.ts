import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import actions from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { SelectedActions } from '~renderer/ui/DiscoverPage/view/DiscoverPage/SelectedActions';

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
  onCancelSelection: actions.uiDiscoverSelectedCanceled,
  onPlaySelected: actions.uiDiscoverSelectedPlayed,
  onAddSelected: actions.uiDiscoverSelectedQueued,
  onDeleteSelected: actions.uiDiscoverSelectedDeleted
};

export const SelectedActionsConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SelectedActions)
);
