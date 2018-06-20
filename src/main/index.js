import { app } from 'electron'

import withEnvironment from './methods/withEnvironment'
import startIpfsDaemon from './methods/startIpfsDaemon'
import getIpfsDaemonParams from './methods/getIpfsDaemonParams'
import startCommunication from './methods/startCommunication'
import createMainWindow from './methods/createMainWindow'
import loadMainWindow from './methods/loadMainWindow'
import withSingleInstanceBehaviour from './methods/withSingleInstanceBehaviour'

const state = {
  mainWindow: null,
  readyToQuit: false
}

withSingleInstanceBehaviour(state)

withEnvironment()

const handleReady = () => {
  console.log('-- starting ipfs daemon')

  const ipfsDaemonPromise = startIpfsDaemon(getIpfsDaemonParams())

  console.log('-- starting ipc')

  const communication = startCommunication({
    ipfsDaemonPromise
  })

  console.log('-- loading main window')

  state.mainWindow = createMainWindow()

  const handleClosed = () => {
    state.mainWindow = null
  }

  state.mainWindow.on('closed', handleClosed)

  loadMainWindow(state.mainWindow)

  const handleBeforeQuit = async e => {
    if (!state.readyToQuit) {
      e.preventDefault()
      try {
        await communication.stop()
        const ipfsDaemon = await ipfsDaemonPromise
        await ipfsDaemon.stop()
        console.log('-- app ready to quit')
      } catch (error) {
        console.error(error)
      }
      state.readyToQuit = true
      app.quit()
    }
  }

  app.on('before-quit', handleBeforeQuit)
}

app.on('ready', handleReady)
