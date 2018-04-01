import React from 'react'

import StartScreen from './App/StartScreen'
import CloseScreen from './App/CloseScreen'
import ReadyScreen from './App/ReadyScreen'
import Root from './App/Root'

class View extends React.Component {
  componentDidMount () {
    const { startApp } = this.props
    startApp()
  }
  render () {
    const { stage, error } = this.props
    return (
      <Root>
        {
          stage === 0 ? (
            <StartScreen />
          ) : stage === 1 ? (
            <ReadyScreen />
          ) : stage === 2 ? (
            <StartScreen message={error} />
          ) : stage === 3 && (
            <CloseScreen />
          )
        }
      </Root>
    )
  }
}

export default View
