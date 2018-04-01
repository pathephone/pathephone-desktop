import { connect } from 'react-redux'

import startApp from '~/actions/startApp'

import App from './App'

const mapStateToProps = state => {
  return {
    ...state.appStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startApp () {
      dispatch(startApp())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
