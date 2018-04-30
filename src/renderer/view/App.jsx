import React from 'react'
import propTypes from 'prop-types'

import StartScreen from './App/StartScreen.jsx'
import CloseScreen from './App/CloseScreen.jsx'
import ReadyScreen from './App/ReadyScreen.jsx'
import Root from './App/Root.jsx'

const App = ({ hasStartScreen, hasReadyScreen, hasCloseScreen, ...restProps }) => (
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
  </Root>
)

App.propTypes = {
  hasStartScreen: propTypes.bool.isRequired,
  hasReadyScreen: propTypes.bool.isRequired,
  hasCloseScreen: propTypes.bool.isRequired
}

export default App
