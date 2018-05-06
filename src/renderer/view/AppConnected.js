import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  getAppStartErrorMessage,
  getAppStartProgress,
  isAppReady
} from '#selectors'

import App from './App.jsx'

const mapStateToProps = state => {
  const appIsReady = isAppReady(state)
  return {
    hasStartScreen: !appIsReady,
    hasReadyScreen: appIsReady,
    hasCloseScreen: false,
    errorMessage: getAppStartErrorMessage(state),
    progress: getAppStartProgress(state)
  }
}

export default withRouter(connect(mapStateToProps)(App))
