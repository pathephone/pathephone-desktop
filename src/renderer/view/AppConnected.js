import { connect } from 'react-redux'

import startApp from '~/actions/startApp'

import {
  getAppStatusCode,
  getAppStatusErrorMessage,
  getAppStatusInfoMessage,
  getAppStatusProgress
} from '~/selectors'

import App from './App'

const mapStateToProps = (...args) => {
  return {
    appStatus: getAppStatusCode(...args),
    errorMessage: getAppStatusErrorMessage(...args),
    infoMessage: getAppStatusInfoMessage(...args),
    progress: getAppStatusProgress(...args)
  }
}

const mapDispatchToProps = {
  startApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
