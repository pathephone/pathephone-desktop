import { connect } from 'react-redux'

import {
  isAppReady,
  isAppClosing,
  getAppErrorMessage,
  isAppStarting
} from '#selectors'

import App from './App.jsx'

const mapStateToProps = (...args) => ({
  hasStartScreen: isAppStarting(...args),
  hasReadyScreen: isAppReady(...args),
  hasCloseScreen: isAppClosing(...args),
  errorMessage: getAppErrorMessage(...args)
})

export default connect(mapStateToProps)(App)
