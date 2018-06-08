import { app } from 'electron'
import path from 'path'
import url from 'url'

import createWindow from './methods/createWindow'
import withEnvironment from './methods/withEnvironment'
import withSingleInstanceBehavior from './methods/withSingleInstanceBehavior'
import withTray from './methods/withTray'
import withIpfs from './methods/withIpfs'
import withNoNavigation from './methods/withNoNavigation'
import withMenu from './methods/withMenu'

withEnvironment()

app.on('ready', () => {
  console.log('-- loading main window')

  let mainWindow = createWindow()

  withSingleInstanceBehavior(mainWindow)

  withTray(mainWindow)

  withIpfs(mainWindow)

  withNoNavigation(mainWindow)

  withMenu(mainWindow)

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  mainWindow.on('close', e => {
    if (!process.platform === 'linux') {
      e.preventDefault()
      mainWindow.hide()
    }
  })
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
