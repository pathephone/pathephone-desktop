import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'

const initApp = async ({ onNextStage }) => {
  onNextStage({ message: 'rxdb' })
  await initDb()
  onNextStage({ message: 'ipfs' })
  await initIpfs()
  onNextStage({ message: 'ready' })
  setTimeout(onNextStage, 500)
}

export default initApp
