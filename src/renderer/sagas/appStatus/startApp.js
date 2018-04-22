import initDb from './startApp/initDb'
import ipfsDaemon from './ipfsDaemon'
import { startIpfsApi } from './ipfsApi'
import openGates from './openGates'

const startApp = async () => {
  await Promise.all([ initDb(), ipfsDaemon.start() ])
  await startIpfsApi()
  await openGates()
}

export default startApp
