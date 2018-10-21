import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { SearchBar } from '~renderer/ui/DiscoverPage/view/DiscoverPage/SearchBar';
import { discoverPageEvents } from '~renderer/ui/DiscoverPage';

interface IStateProps {
  searchValue: string;
  albumsCount: number;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  searchValue: selectors.getDiscoverSearchValue(state),
  albumsCount: selectors.getAlbumsCountStrict(state)
});

interface IDispatchProps {
  onCancelSearch(): void;
  onFormSubmit(v: string): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onCancelSearch: discoverPageEvents.uiDiscoverSearchCleared,
  onFormSubmit: discoverPageEvents.uiDiscoverSearchPerformed
};

export const SearchBarConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps, {}, IRootState>(mapStateToProps, mapDispatchToProps)(SearchBar)
);
