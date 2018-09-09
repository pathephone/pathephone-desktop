import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { systemActions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import { appSelectors } from '~renderer/ui/App';
import { IAppState } from '~renderer/ui/App/types';
import { AppContainer } from '~renderer/ui/App/view/container';

interface IOwnProps extends RouteComponentProps<void> {}

interface IStateProps {
  hasStartScreen: boolean;
  hasReadyScreen: boolean;
  hasCloseScreen: boolean;
  hasLockScreen: boolean;
  errorMessage?: string;
  progress: number;
}

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IRootState> = (
  state: IRootState
) : IStateProps => {
  const appState: IAppState = appSelectors.getAppState(state);
  const appIsReady: boolean = appState.progress === 100;

  return {
    hasStartScreen: !appIsReady,
    hasReadyScreen: appIsReady,
    hasCloseScreen: false,
    hasLockScreen: appState.isLocked,
    errorMessage: appState.errorMessage,
    progress: appState.progress
  };
};

interface IDispatchProps {
  onDidMount(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = {
  onDidMount: systemActions.systemAppRootMounted
};

export const App: React.ComponentClass = withRouter(
  connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(AppContainer)
);
