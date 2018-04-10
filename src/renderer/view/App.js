import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen'
import CloseScreen from './App/CloseScreen'
import ReadyScreen from './App/ReadyScreen'
import Root from './App/Root'

import {
  APP_STATUS_CLOSE,
  APP_STATUS_ERROR,
  APP_STATUS_READY,
  APP_STATUS_START
} from '~constants/appStatus'

class App extends React.Component {
  componentDidMount () {
    const { startApp } = this.props
    startApp()
  }
  render () {
    const { appStatus, ...restProps } = this.props
    return (
      <Root>
        {
          appStatus === APP_STATUS_START ? (
            <StartScreen {...restProps} />
          ) : appStatus === APP_STATUS_READY ? (
            <ReadyScreen />
          ) : appStatus === APP_STATUS_ERROR ? (
            <StartScreen {...restProps} />
          ) : appStatus === APP_STATUS_CLOSE && (
            <CloseScreen {...restProps} />
          )
        }
      </Root>
    )
  }
}

App.propTypes = {
  appStatus: propTypes.number.isRequired,
  startApp: propTypes.func.isRequired
}

export default App
