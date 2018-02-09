import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'

const initApp = async ({ onNextStage }) => {
  try {
    onNextStage({ message: 'rxdb', stage: 1 })
    await initDb()
    onNextStage({ message: 'ipfs', stage: 2 })
    await initIpfs()
    onNextStage({ message: 'ready', stage: 3 })
    setTimeout(
      () => {
        onNextStage({ stage: 4 })
      }, 500
    )
  } catch (error) {
    onNextStage({ error })
  }
}

export default initApp
