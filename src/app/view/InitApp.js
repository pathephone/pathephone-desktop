import React from 'react'

import Stepper from '#/Stepper'

import StartScreen from './InitApp/StartScreen'
import initApp from './InitApp/initApp'

import App from './App'

// const { ipcRenderer, remote } = require('electron')

const StepperView = ({ step }) => {
  if (step.ready === true) {
    return <App />
  }
  return <StartScreen {...step} />
}

const InitApp = () => {
  return (
    <Stepper
      generator={initApp}
      View={StepperView}
    />
  )
}

export default InitApp
