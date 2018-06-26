import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen.jsx'
import CloseScreen from './App/CloseScreen.jsx'
import ReadyScreen from './App/ReadyScreen.jsx'
import LockScreen from './App/LockScreen.jsx'
import Root from './App/Root.jsx'

class App extends React.Component {
  componentDidMount = this.props.onDidMount
  render () {
    const { hasStartScreen, hasLockScreen, hasReadyScreen, hasCloseScreen, ...restProps } = this.props
    return (
      <Root>
        {
          hasStartScreen ? (
            <StartScreen {...restProps} />
          ) : hasReadyScreen ? (
            <ReadyScreen />
          ) : hasCloseScreen && (
            <CloseScreen {...restProps} />
          )
        }
        {
          hasLockScreen && (
            <LockScreen />
          )
        }
      </Root>
    )
  }
}

App.propTypes = {
  hasStartScreen: propTypes.bool.isRequired,
  hasReadyScreen: propTypes.bool.isRequired,
  hasCloseScreen: propTypes.bool.isRequired,
  hasLockScreen: propTypes.bool.isRequired,
  onDidMount: propTypes.func.isRequired
}

export default App
