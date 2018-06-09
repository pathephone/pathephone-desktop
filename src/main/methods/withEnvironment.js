import { app } from 'electron'
import jetpack from 'fs-jetpack'

import { ENVIRONMENT } from '#config'
import { ENV_PRODUCTION, ENV_TESTING, ENV_DEVELOPMENT } from '~data/constants'

const withEnvronment = () => {
  if (ENVIRONMENT !== ENV_PRODUCTION) {
    const userDataPath = app.getPath('userData')
    const nextDataPath = `${userDataPath} (${ENVIRONMENT})`
    if (ENVIRONMENT === ENV_TESTING) {
      jetpack.remove(nextDataPath)
    }
    app.setPath('userData', nextDataPath)
  }

  if (ENVIRONMENT === ENV_DEVELOPMENT) {
    require('electron-debug')({showDevTools: true})
    require('electron-context-menu')({})
  }
}

export default withEnvronment
