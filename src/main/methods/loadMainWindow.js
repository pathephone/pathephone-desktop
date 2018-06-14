import path from 'path'
import url from 'url'

import { IS_DEVELOPMENT } from '#config'

const loadMainWindow = mainWindow => {
  if (IS_DEVELOPMENT) {
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
}

export default loadMainWindow
