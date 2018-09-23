import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { Navigation } from '~renderer/ui/Navigation/view/Navigation';

type IOwnProps = RouteComponentProps<{}>;

interface IStateProps {
  hasUpdateIndicator: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  state: IRootState
): IStateProps => ({
  hasUpdateIndicator: !!selectors.getNewRelease(state)
});

export const NavigationConnected: React.ComponentClass<{}> = withRouter(
  connect<IStateProps, void, IOwnProps, IRootState>(mapStateToProps)(Navigation)
);
