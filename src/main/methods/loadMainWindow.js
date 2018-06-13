import path from 'path'
import url from 'url'

import { ENVIRONMENT } from '#config'
import { ENV_DEVELOPMENT } from '~data/constants'

const loadMainWindow = mainWindow => {
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
}

export default loadMainWindow
