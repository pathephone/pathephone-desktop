import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  getAppStartErrorMessage,
  getAppStartProgress,
  isAppReady,
  isAppLocked,
} from '#selectors';

import App from './App.jsx';
import {
  systemAppRootMounted,
} from '~actions/system';

const mapStateToProps = (state) => {
  const appIsReady = isAppReady(state);
  return {
    hasStartScreen: !appIsReady,
    hasReadyScreen: appIsReady,
    hasCloseScreen: false,
    hasLockScreen: isAppLocked(state),
    errorMessage: getAppStartErrorMessage(state),
    progress: getAppStartProgress(state),
  };
};

const mapDispatchToProps = {
  onDidMount: systemAppRootMounted,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
