import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen'
import CloseScreen from './App/CloseScreen'
import ReadyScreen from './App/ReadyScreen'
import Root from './App/Root'

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
