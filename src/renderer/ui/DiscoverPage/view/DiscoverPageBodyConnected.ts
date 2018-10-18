import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { DiscoverPageBody, IDiscoverPageBodyProps } from './DiscoverPageBody';

interface IStateProps {
  hasNoAlbumsScreen: boolean;
  hasNoSearchResultsScreen: boolean;
  hasFeedScreen: boolean;
  hasProcessingScreen: boolean;
  isAlbumsUpdateNeeded: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => {
  const hasAlbums: boolean = selectors.isDiscoverHasAlbums(state);
  const hasError: boolean = selectors.isDiscoverHasFailed(state);
  const isSearchPerformed: boolean = selectors.isDiscoverSearchPerformed(state);
  const isProcessing: boolean = selectors.isDiscoverPageProcessing(state);
  const isAlbumsOutdated: boolean = selectors.isDiscoverAlbumsOutdated(state);

  return {
    hasNoAlbumsScreen: !hasAlbums && !hasError && !isSearchPerformed && !isProcessing,
    hasNoSearchResultsScreen: isSearchPerformed && !isProcessing && !hasError && !hasAlbums,
    hasFeedScreen: hasAlbums,
    hasProcessingScreen: isProcessing,
    isAlbumsUpdateNeeded: isAlbumsOutdated && !hasAlbums
  };
};

interface IDispatchProps {
  onAlbumsUpdateRequest(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onAlbumsUpdateRequest: actions.systemDiscoverAlbumsFetch
};

export const DiscoverPageBodyConnected: React.ComponentClass<{}> = (
  connect<IStateProps, IDispatchProps, {}, IRootState>(
    mapStateToProps, mapDispatchToProps
  )(DiscoverPageBody)
);
