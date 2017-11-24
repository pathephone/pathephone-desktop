// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from 'path'
import url from 'url'
import { app, Menu } from 'electron'
import { devMenuTemplate } from './menu/dev_menu_template'
import { editMenuTemplate } from './menu/edit_menu_template'
import createWindow from './helpers/window'

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from 'env'

const { spawn, exec } = require('child_process')
const ps = require('ps-node')
const fs = require('fs')

let mainWindow = null
let ipfs = null

const setApplicationMenu = () => {
  const menus = [editMenuTemplate]
  if (env.name !== 'production') {
    menus.push(devMenuTemplate)
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
}

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== 'production') {
  const userDataPath = app.getPath('userData')
  app.setPath('userData', `${userDataPath} (${env.name})`)
}

global.ipfsLoaded = false
const loadedIPFS = () => {
  global.ipfsLoaded = true
  if (mainWindow) { mainWindow.webContents.send('ipfs-ready', true) }
}

const getIPFSPath = () => {
  if (fs.existsSync('./ipfs')) {
    return './ipfs'
  }

  if (/^win/.test(process.platform) && fs.existsSync('./ipfs.exe')) {
    return './ipfs.exe'
  }

  if (/^win/.test(process.platform) && fs.existsSync('imports/win/ipfs.exe')) {
    return 'imports/win/ipfs.exe'
  }

  if (process.platform === 'linux' && fs.existsSync('imports/linux/ipfs')) {
    return 'imports/linux/ipfs'
  }

  if (process.platform === 'darwin' && fs.existsSync('imports/darwin/ipfs')) {
    return 'imports/darwin/ipfs'
  }

  return 'ipfs'
}

const ipfsPath = path.resolve(getIPFSPath())
console.log('IPFS Path:', ipfsPath)
const startIPFS = () => {
  exec(`${ipfsPath} repo fsck`, (err) => {
    if (err) {
      console.error(err)
      return
    }

    let needIPFSInit = false
    ipfs = spawn(ipfsPath, ['daemon', '--enable-pubsub-experiment'])

    ipfs.stdout.on('data', (data) => {
      console.log(`ipfs: ${data}`)
      if (data.includes('Daemon is ready')) {
        console.log('catched ipfs start')
        loadedIPFS()
      }
    })

    ipfs.stderr.on('data', (data) => {
      if (data.includes('ipfs init')) {
        console.log('need ipfs initialization')
        needIPFSInit = true
      }
    })

    ipfs.on('close', (code) => {
      if (needIPFSInit) {
        console.log('start ipfs init')
        exec(`${ipfsPath} init`, startIPFS)
        return
      }

      console.log(`ipfs closed with code ${code}`)
      app.quit()
    })
  })
}

console.log('search ipfs process')
ps.lookup({command: 'ipfs'}, function (err, resultList) {
  if (err) {
    throw new Error(err)
  }

  if (resultList.length > 0) {
    console.log('ipfs already started, simply load main window')
    loadedIPFS()
  } else {
    startIPFS()
  }
})

app.on('ready', () => {
  setApplicationMenu()

  mainWindow = createWindow('main', {
    width: 1000,
    height: 600
  })

  console.log('loading main window')
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'app.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  if (env.name === 'development') {
    mainWindow.openDevTools()
  }
})

app.on('window-all-closed', () => {
  console.log('closing app')
  if (ipfs) { ipfs.kill() } else { app.quit() }
})

app.on('before-quit', () => {
  if (ipfs) { ipfs.kill() }
})
