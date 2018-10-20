import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { DiscoverPage } from '~renderer/ui/DiscoverPage/view/DiscoverPage';

interface IStateProps {
  hasSelectedActions: boolean;
  hasSearchBar: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps  => {
  const isSelected: boolean = selectors.isDiscoverSelected(state);
  const count: number | null = selectors.getAlbumsCount(state);

  return {
    hasSelectedActions: isSelected,
    hasSearchBar: count !== null && count > 0
  };
};

interface IDispatchProps {
  onWillMount(): void;
  onWillUnmount(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onWillMount: actions.systemDiscoverAlbumsFetch,
  onWillUnmount: actions.uiDiscoverPageClosed
};

export const DiscoverPageConnected: React.ComponentClass<{}> = (
  connect<IStateProps, IDispatchProps>(
    mapStateToProps, mapDispatchToProps
  )(DiscoverPage)
);
