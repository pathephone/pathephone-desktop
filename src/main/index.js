import { app } from 'electron'
import path from 'path'
import url from 'url'

import { ENVIRONMENT } from '#config'

import createWindow from './methods/createWindow'
import withEnvironment from './methods/withEnvironment'
import withSingleInstanceBehavior from './methods/withSingleInstanceBehavior'
import withTray from './methods/withTray'
import withIpfs from './methods/withIpfs'
import withNoNavigation from './methods/withNoNavigation'
import withMenu from './methods/withMenu'
import { ENV_DEVELOPMENT } from '~data/constants'

withEnvironment()

app.on('ready', () => {
  console.log('-- loading main window')

  let mainWindow = createWindow()

  withSingleInstanceBehavior(mainWindow)

  withTray(mainWindow)

  withIpfs(mainWindow)

  withNoNavigation(mainWindow)

  withMenu(mainWindow)

  if (ENVIRONMENT === ENV_DEVELOPMENT) {
    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
    )
  }

  mainWindow.on('close', e => {
    if (!process.platform === 'linux') {
      mainWindow.hide()
      e.preventDefault()
    }
  })
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
