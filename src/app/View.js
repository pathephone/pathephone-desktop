// @flow
import React from 'react'
import { connect } from 'react-redux'

import StartScreen from './View/StartScreen'
import CloseScreen from './View/CloseScreen'
import ReadyScreen from './View/ReadyScreen'
import Root from './View/Root'

const View = ({ stage }) => (
  <Root>
    {
      stage === 0 ? (
        <StartScreen />
      ) : stage === 1 ? (
        <StartScreen />
      ) : stage === 2 ? (
        <StartScreen />
      ) : stage === 3 ? (
        <ReadyScreen />
      ) : stage === 4 && (
        <CloseScreen />
      )
    }
  </Root>
)

export default View
