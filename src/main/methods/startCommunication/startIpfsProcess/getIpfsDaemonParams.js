import { app } from 'electron'
import path from 'path'

import {
  IS_TESTING,
  IS_OFFLINE,
  IS_WINDOWS,
  RESOURCES_PATH,
  IS_DEVELOPMENT
} from '#config'

const getIpfsDaemonParams = () => {
  const type = 'go'
  let exec
  if (!IS_DEVELOPMENT) {
    if (IS_WINDOWS) {
      exec = `${RESOURCES_PATH}/go-ipfs/ipfs.exe`
    } else {
      exec = `${RESOURCES_PATH}/go-ipfs/ipfs`
    }
  }
  const repoPath = path.join(app.getPath('userData'), 'ipfsRepo')
  const disposable = IS_TESTING
  const defaultAddrs = !IS_TESTING
  const startFlags = ['--enable-pubsub-experiment']
  if (IS_OFFLINE) {
    startFlags.push('--offline')
  }
  return {
    createParams: {
      type, exec
    },
    spawnParams: {
      repoPath, disposable, defaultAddrs
    },
    startFlags
  }
}

export default getIpfsDaemonParams
