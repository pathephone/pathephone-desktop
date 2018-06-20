import { app } from 'electron'
import jetpack from 'fs-jetpack'

import { ENVIRONMENT, IS_PRODUCTION, IS_TESTING, IS_DEVELOPMENT } from '#config'

const withEnvronment = () => {
  if (!IS_PRODUCTION) {
    const userDataPath = app.getPath('userData')
    const nextDataPath = `${userDataPath} (${ENVIRONMENT})`
    if (IS_TESTING) {
      jetpack.remove(nextDataPath)
    }
    app.setPath('userData', nextDataPath)
  }

  if (IS_DEVELOPMENT) {
    app.commandLine.appendSwitch('remote-debugging-port', '9223')
    // require('electron-debug')({showDevTools: true})
    require('electron-context-menu')({})
  }
}

export default withEnvronment
