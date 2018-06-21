import { app } from 'electron'

import withEnvironment from './methods/withEnvironment'
import startIpfsDaemon from './methods/startIpfsDaemon'
import getIpfsDaemonParams from './methods/getIpfsDaemonParams'
import startCommunication from './methods/startCommunication'
import createMainWindow from './methods/createMainWindow'
import loadMainWindow from './methods/loadMainWindow'
import withSingleInstanceBehaviour from './methods/withSingleInstanceBehaviour'
import { HAS_TRAY } from '#config'

const state = {
  mainWindow: null,
  isReadyToQuit: false,
  isQuiting: false
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

  const handleClose = (e) => {
    if (HAS_TRAY && !state.isReadyToQuit) {
      e.preventDefault()
      state.mainWindow.hide()
    }
  }

  state.mainWindow.on('close', handleClose)

  const handleClosed = () => {
    state.mainWindow = null
  }

  app.on('closed', handleClosed)

  loadMainWindow(state.mainWindow)

  const handleBeforeQuit = async e => {
    if (state.isQuiting || !state.isReadyToQuit) {
      e.preventDefault()
    }
    if (!state.isReadyToQuit) {
      state.isQuiting = true
      try {
        await communication.stop()
        const ipfsDaemon = await ipfsDaemonPromise
        await ipfsDaemon.stop()
        console.log('-- app ready to quit')
      } catch (error) {
        console.error(error)
      }
      state.isReadyToQuit = true
      state.isQuiting = false
      app.quit()
    }
  }

  app.on('before-quit', handleBeforeQuit)
}

app.on('ready', handleReady)
