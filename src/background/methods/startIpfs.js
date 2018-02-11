import portCheck from '~/utils/portReady'
import { app } from 'electron'
const startIpfsDaemon = require('../modules/ipfs/startIpfsDaemon')
const beforeStartIpfs = require('../modules/ipfs/beforeStartIpfs')

const findGoodPort = async (port, host) => {
  while (!(await portCheck(port, host))) {
    port++
  }
  return port
}

const startIpfs = async ({dataDirectory}) => {
  const options = {}
  if (dataDirectory) {
    options.env = {}
    options.env.IPFS_PATH = dataDirectory.replace(/\\/g, '/')
  }
  // port check
  options.port = await findGoodPort(4001, '0.0.0.0')
  options.portApi = await findGoodPort(5001)
  options.portGateway = await findGoodPort(8080)
  console.log(options.port, options.portApi, options.portGateway)
  await beforeStartIpfs(options)
  global.portApi = options.portApi
  return startIpfsDaemon(options)
}

global.startIpfsDaemon = () => startIpfs({ dataDirectory: app.getPath('userData') + '/ipfs' })
export default async (dataDirectory) => startIpfs({dataDirectory})
