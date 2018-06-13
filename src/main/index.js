import { app } from 'electron'

import withEnvironment from './methods/withEnvironment'
import startIpfsDaemon from './methods/startIpfsDaemon'
import getIpfsDaemonParams from './methods/getIpfsDaemonParams'
import startCommunication from './methods/startCommunication'
import createMainWindow from './methods/createMainWindow'
import startMainWindowLifecycle from './methods/startMainWindowLifecycle'
import loadMainWindow from './methods/loadMainWindow'

let mainWindow = null
let readyToQuit = false

const isSecondInstance = app.makeSingleInstance(() => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    window.focus()
  }
})

if (isSecondInstance) {
  console.log('-- second instance detected, exit')
  app.exit()
}

withEnvironment()

const ipfsDaemonPromise = startIpfsDaemon(getIpfsDaemonParams())

const communication = startCommunication({
  ipfsDaemonPromise
})

const handleReady = () => {
  console.log('-- loading main window')

  mainWindow = createMainWindow()

  const handleClosed = () => {
    mainWindow = null
  }

  mainWindow.on('closed', handleClosed)

  startMainWindowLifecycle({
    mainWindow,
    ipfsDaemonPromise,
    communication
  })

  loadMainWindow(mainWindow)
}

const handleBeforeQuit = async e => {
  if (!readyToQuit) {
    e.preventDefault()
    try {
      await communication.stop()
      const ipfsDaemon = await ipfsDaemonPromise
      await ipfsDaemon.stop()
      console.log('-- app ready to quit')
    } catch (error) {
      console.error(error)
    }
    readyToQuit = true
    app.quit()
  }
}

app.on('ready', handleReady)
app.on('before-quit', handleBeforeQuit)
