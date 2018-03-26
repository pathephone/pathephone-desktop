import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'
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
    onNextStage({ message: 'ipfs daemon', ready: 33 })
    await ipfsDaemon.start()
    onNextStage({ message: 'ipfs api', ready: 66 })
    await initIpfs()
    onNextStage({ message: 'ready', ready: 100 })
    setTimeout(
      () => {
        onNextStage({ ready: true })
      }, 500
    )
  } catch (error) {
    onNextStage({ error })
  }
}

export default initApp
