import { connect } from 'react-redux'

import startApp from '~/actions/startApp'

import { getAppStatus } from '~/selectors'

import App from './App'

const mapStateToProps = state => {
  return {
    ...getAppStatus(state)
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
