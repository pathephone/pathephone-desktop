/* eslint global-require: 1, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow } from 'electron'
import MenuBuilder from './menu'
const { spawn, exec } = require('child_process');
const ps = require('ps-node');

let mainWindow = null
let ipfs = null

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')()
  const path = require('path')
  const p = path.join(__dirname, '..', 'app', 'node_modules')
  require('module').globalPaths.push(p)
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ]

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log)
}

/**
 * Add event listeners...
 */

const onCloseApp = () => {
  console.log('closing app')
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  //if (process.platform !== 'darwin') {
  //  app.quit()
  //}
  if(ipfs)
  	ipfs.kill()
  else
    onCloseApp()
})


let ipfsLoaded = false
const startIPFS = () => {
  exec('ipfs repo fsck', (err) => {
    if(err)
      return;

    let needIPFSInit = false
    ipfs = spawn('ipfs', ['daemon', '--enable-pubsub-experiment']);

    ipfs.stdout.on('data', (data) => {
      console.log(`ipfs: ${data}`);
      if(data.includes('Daemon is ready'))
      {
        console.log('catched ipfs start')
        ipfsLoaded = true
        loadMainWindow()
      }
    });

    ipfs.stderr.on('data', (data) => {
      if(data.includes('ipfs init'))
      {
        console.log('need ipfs initialization')
        needIPFSInit = true
      }
    });

    ipfs.on('close', (code) => {
      if(needIPFSInit)
      {
        console.log('start ipfs init')
        exec('ipfs init', startIPFS)
        return
      }

      console.log(`ipfs closed with code ${code}`);
      onCloseApp()
    });
  })
}

let mainWindowLoaded = false
const loadMainWindow = () => {
  if(mainWindowLoaded)
    return

  if(!ipfsLoaded)
    return

  if(!mainWindow)
    return

  console.log('loading main window')
  mainWindowLoaded = true
  mainWindow.loadURL(`file://${__dirname}/app.html`)

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined')
    }
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menuBuilder = new MenuBuilder(mainWindow)
  menuBuilder.buildMenu()
}

console.log('search ipfs process')
ps.lookup({command: 'ipfs'}, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }
 
    if(resultList.length > 0) {
      console.log('ipfs already started, simply load main window')
      ipfsLoaded = true
      loadMainWindow()
    }
    else {
      startIPFS()
    }
});

app.on('ready', async () => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions()
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  })

  loadMainWindow()
})
