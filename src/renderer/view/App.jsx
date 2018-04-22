import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen.jsx'
import CloseScreen from './App/CloseScreen.jsx'
import ReadyScreen from './App/ReadyScreen.jsx'
import Root from './App/Root.jsx'

class App extends React.Component {
  componentDidMount = this.props.onAppMounted
  render () {
    const { showsStartScreen, showsReadyScreen, showsCloseScreen, ...restProps } = this.props
    return (
      <Root>
        {
          showsStartScreen ? (
            <StartScreen {...restProps} />
          ) : showsReadyScreen ? (
            <ReadyScreen />
          ) : showsCloseScreen && (
            <CloseScreen {...restProps} />
          )
        }
      </Root>
    )
  }
}

App.propTypes = {
  showsStartScreen: propTypes.number.isRequired,
  showsReadyScreen: propTypes.number.isRequired,
  showsCloseScreen: propTypes.number.isRequired,
  onAppMounted: propTypes.func.isRequired
}

export default App
