import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  isAppReady,
  isAppCloses,
  isAppStarts,
  getAppStartErrorMessage,
  getAppStartProgress
} from '#selectors'

import App from './App.jsx'

const mapStateToProps = state => ({
  hasStartScreen: isAppStarts(state),
  hasReadyScreen: isAppReady(state),
  hasCloseScreen: isAppCloses(state),
  errorMessage: getAppStartErrorMessage(state),
  progress: getAppStartProgress(state)
})

export default withRouter(connect(mapStateToProps)(App))
