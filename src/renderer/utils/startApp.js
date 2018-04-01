import initDb from '../scripts/initDb'
import ipfsDaemon from '../api/ipfsDaemon'
import { startIpfsApi } from '../api/ipfsApi'
import openGates from '../scripts/openGates'

const startApp = async () => {
  await Promise.all([ initDb(), ipfsDaemon.start() ])
  await startIpfsApi()
  await openGates()
}

export default startApp
