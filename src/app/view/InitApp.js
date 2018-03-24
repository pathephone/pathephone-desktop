import React from 'react'

import Stepper from '#/Stepper'

import StartScreen from './InitApp/StartScreen'
import initApp from '~/scripts/initApp'

import App from './App'

// const { ipcRenderer, remote } = require('electron')

const StepperView = ({ step }) => {
  if (step.closing) {
    return (
      <div className='izi-fill izi-middle'>
        <h4 className='izi-gray izi-uppercase'>closing app</h4>
      </div>
    )
  }
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
