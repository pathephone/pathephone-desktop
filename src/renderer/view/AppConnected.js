import { connect } from 'react-redux'

import { initApp } from '~/actions'

import {
  isAppInitializing,
  isAppReady,
  isAppClosing,
  getAppStatusErrorMessage,
  getAppStatusInfoMessage,
  getAppStatusProgress
} from '~/selectors'

import App from './App.jsx'

const mapStateToProps = (...args) => ({
  isStartScreen: isAppInitializing(...args),
  isReadyScreen: isAppReady(...args),
  isCloseScreen: isAppClosing(...args),
  errorMessage: getAppStatusErrorMessage(...args),
  infoMessage: getAppStatusInfoMessage(...args),
  progress: getAppStatusProgress(...args)
})

const mapDispatchToProps = {
  onAppMounted: initApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
