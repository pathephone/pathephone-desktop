import { app } from 'electron'

import {
  IPC_IPFS_START
} from '~data/ipcTypes'
import {
  mainTakes
} from '~utils/ipcMain'

import startIpfsDaemon from './withIpfs/startIpfsDaemon'

const handleIpfsStartRequest = async (window) => {
  const {
    stopIpfsDaemon,
    ...ipfsInfo
  } = await startIpfsDaemon(window)
  app.once('will-quit', (e) => {
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
  mainTakes(IPC_IPFS_START, () => handleIpfsStartRequest(window))
}

export default withIpfs
