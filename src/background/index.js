// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from 'path'
import url from 'url'
import { app } from 'electron'

import setAppMenu from './methods/setAppMenu'
import createWindow from './methods/createWindow'
import tray from './methods/tray'

// Special module holding environment variables which you declared
// in config/env_xxx.json file.

import env from '#config'
import './methods/initGlobals'

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
console.log(env.name)
if (env.name !== 'production') {
  const userDataPath = app.getPath('userData')
  app.setPath('userData', `${userDataPath} (${env.name})`)
}

if (env.name === 'development') {
  require('electron-debug')({showDevTools: true})
  require('electron-context-menu')({})
}

app.on('ready', async () => {
  setAppMenu(env)
  let mainWindow = createWindow('main', {
    width: 1000,
    height: 600
  })

  tray(mainWindow)

  console.log('-- loading main window')
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  mainWindow.webContents.on('will-navigate', e => { e.preventDefault() })

  mainWindow.on('close', e => {
    e.preventDefault()
    if (!app.isQuiting && process.platform !== 'linux') {
      mainWindow.hide()
      return
    }
    mainWindow.webContents.send('handle-custom-close')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  app.on('window-all-closed', () => {
    console.log('closing app')
    app.quit()
  })

  app.on('before-quit', () => {
    app.isQuiting = true
  })
})
