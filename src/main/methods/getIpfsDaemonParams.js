import { app } from 'electron'
import path from 'path'

import { ENV_TESTING } from '~data/constants'
import { ENVIRONMENT } from '#config'

const getIpfsDaemonParams = () => {
  const repoPath = path.join(app.getPath('userData'), 'ipfsRepo')
  const disposable = ENVIRONMENT === ENV_TESTING
  const startFlags = ['--enable-pubsub-experiment']
  if (process.env.IPFS_OFFLINE) {
    startFlags.push('--offline')
  }
  return {
    startFlags, repoPath, disposable
  }
}

export default getIpfsDaemonParams
