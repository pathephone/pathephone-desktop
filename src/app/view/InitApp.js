import React from 'react'

import Stager from '#/Stager'

import StartScreen from './InitApp/StartScreen'
import initApp from './InitApp/initApp'

import App from './App'

// const { ipcRenderer, remote } = require('electron')

const StagerView = (props) => {
  if (props.stage > 3) {
    return <App />
  }
  return <StartScreen {...props} />
}

const InitApp = () => {
  return (
    <Stager
      generator={initApp}
      view={StagerView}
    />
  )
}

export default InitApp
