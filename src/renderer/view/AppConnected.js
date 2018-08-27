import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import selectors from '#selectors';
import actions from '#actions';

import App from './App';

const mapStateToProps = (state) => {
  const appIsReady = selectors.isAppReady(state);
  return {
    hasStartScreen: !appIsReady,
    hasReadyScreen: appIsReady,
    hasCloseScreen: false,
    hasLockScreen: selectors.isAppLocked(state),
    errorMessage: selectors.getAppStartErrorMessage(state),
    progress: selectors.getAppStartProgress(state),
  };
};

const mapDispatchToProps = {
  onDidMount: actions.systemAppRootMounted,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
