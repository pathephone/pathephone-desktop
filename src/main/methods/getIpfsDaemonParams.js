import { app } from 'electron'
import path from 'path'

import { IS_TESTING } from '#config'

const getIpfsDaemonParams = () => {
  const repoPath = path.join(app.getPath('userData'), 'ipfsRepo')
  const disposable = IS_TESTING
  const startFlags = ['--enable-pubsub-experiment']
  if (process.env.IPFS_OFFLINE) {
    startFlags.push('--offline')
  }
  return {
    startFlags, repoPath, disposable
  }
}

export default getIpfsDaemonParams
