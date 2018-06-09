import { app } from 'electron'
import path from 'path'

import { ENV_TESTING } from '~data/constants'
import { ENVIRONMENT } from '#config'

import {
  IPC_IPFS_START
} from '~data/ipcTypes'
import {
  mainTakes
} from '~utils/ipcMain'

import startIpfsDaemon from './withIpfs/startIpfsDaemon'

const handleIpfsStartRequest = async (params) => {
  const {
    stopIpfsDaemon,
    ...ipfsInfo
  } = await startIpfsDaemon(params)

  app.once('will-quit', e => {
    e.preventDefault()
    stopIpfsDaemon()
      .then(() => {
        console.log('ipfs-d stoped')
      })
      .catch(console.error)
      .then(app.quit)
  })
  return ipfsInfo
}

const withIpfs = (window) => {
  const repoPath = path.join(app.getPath('userData'), 'ipfsRepo')
  const disposable = ENVIRONMENT === ENV_TESTING
  const startFlags = ['--enable-pubsub-experiment']
  if (process.env.IPFS_OFFLINE) {
    startFlags.push('--offline')
  }
  const ipfsParams = {
    window, startFlags, repoPath, disposable
  }
  mainTakes(IPC_IPFS_START, () => handleIpfsStartRequest(ipfsParams))
}

export default withIpfs
