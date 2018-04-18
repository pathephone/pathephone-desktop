import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen.jsx'
import CloseScreen from './App/CloseScreen.jsx'
import ReadyScreen from './App/ReadyScreen.jsx'
import Root from './App/Root.jsx'

class App extends React.Component {
  componentDidMount = this.props.onAppMounted
  render () {
    const { isStartScreen, isReadyScreen, isCloseScreen, ...restProps } = this.props
    return (
      <Root>
        {
          isStartScreen ? (
            <StartScreen {...restProps} />
          ) : isReadyScreen ? (
            <ReadyScreen />
          ) : isCloseScreen && (
            <CloseScreen {...restProps} />
          )
        }
      </Root>
    )
  }
}

App.propTypes = {
  isStartScreen: propTypes.number.isRequired,
  isReadyScreen: propTypes.number.isRequired,
  isCloseScreen: propTypes.number.isRequired,
  onAppMounted: propTypes.func.isRequired
}

export default App
