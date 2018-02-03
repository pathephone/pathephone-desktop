import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'

const initApp = async ({ onNextStage }) => {
  try {
    onNextStage({ message: 'rxdb' })
    await initDb()
    onNextStage({ message: 'ipfs' })
    await initIpfs()
    onNextStage({ message: 'ready' })
    setTimeout(onNextStage, 500)
  } catch (e) {
    onNextStage({ error: e.message })
  }
}

export default initApp
