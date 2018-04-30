import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  isAppReady,
  isAppClosing,
  getAppErrorMessage,
  isAppStarting,
  getAppProgress
} from '#selectors'

import App from './App.jsx'

const mapStateToProps = (...args) => ({
  hasStartScreen: isAppStarting(...args),
  hasReadyScreen: isAppReady(...args),
  hasCloseScreen: isAppClosing(...args),
  errorMessage: getAppErrorMessage(...args),
  progress: getAppProgress(...args)
})

export default withRouter(connect(mapStateToProps)(App))
