import { app } from 'electron'
import path from 'path'

import {
  IS_TESTING,
  IS_OFFLINE
} from '#config'

const getIpfsDaemonParams = () => {
  const repoPath = path.join(app.getPath('userData'), 'ipfsRepo')
  const disposable = IS_TESTING
  const defaultAddrs = !IS_TESTING
  const startFlags = ['--enable-pubsub-experiment']
  if (IS_OFFLINE) {
    startFlags.push('--offline')
  }
  return {
    spawnParams: {
      repoPath, disposable, defaultAddrs
    },
    startFlags
  }
}

export default getIpfsDaemonParams
