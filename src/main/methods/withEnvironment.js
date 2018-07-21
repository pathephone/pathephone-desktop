import { app } from 'electron'
import jetpack from 'fs-jetpack'
import path from 'path'

import { ENVIRONMENT, IS_PRODUCTION, IS_TESTING, IS_DEVELOPMENT } from '#config'

const withEnvronment = () => {
  const userDataPath = app.getPath('userData')
  const nextDataPath = path.resolve(
    userDataPath, `../Pathephone${!IS_PRODUCTION ? ` (${ENVIRONMENT})` : ''}`
  )
  if (IS_TESTING) {
    jetpack.remove(nextDataPath)
  }
  app.setPath('userData', nextDataPath)

  if (IS_DEVELOPMENT) {
    app.commandLine.appendSwitch('remote-debugging-port', '9223')
    // require('electron-debug')({showDevTools: true})
    require('electron-context-menu')({})
  }
}

export default withEnvronment
