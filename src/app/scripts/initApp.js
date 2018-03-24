import initDb from '~/scripts/initDb'
import openGates from '~/scripts/openGates'
import { startIpfsApi } from '~/api/ipfsApi'
import ipfsDaemon from '~/api/ipfsDaemon'

import { ipcRenderer, remote } from 'electron'

const initApp = async ({ onNextStage }) => {
  try {
    ipcRenderer.on('handle-custom-close', async () => {
      onNextStage({ closing: true })
      if (ipfsDaemon.stop) {
        await ipfsDaemon.stop()
      }
      remote.getCurrentWindow().destroy()
    })
    onNextStage({ message: 'rxdb', ready: 0 })
    await initDb()
    onNextStage({ message: 'ipfs daemon', ready: 20 })
    await ipfsDaemon.start()
    onNextStage({ message: 'ipfs api', ready: 50 })
    await startIpfsApi({port: remote.getGlobal('portApi')})
    onNextStage({ message: 'metabin gates', ready: 70 })
    await openGates()
    onNextStage({ message: 'ready', ready: 100 })
    setTimeout(
      () => {
        onNextStage({ ready: true })
      }, 500
    )
  } catch (error) {
    console.error(error)
    onNextStage({ error })
  }
}

export default initApp
