import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'
import ipfsDaemon from '~/api/ipfsDaemon'

const initApp = async ({ onNextStage }) => {
  try {
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
