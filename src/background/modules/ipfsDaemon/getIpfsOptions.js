import checkPort from './checkPort'
import { app } from 'electron'

const findGoodPort = async (port, host) => {
  while (!(await checkPort(port, host))) {
    port++
  }
  return port
}

const getIpfsOptions = async ({ silent }) => {
  const options = {}
  const dataDirectory = (app && app.getPath) ? app.getPath('userData') + '/ipfs' : false
  if (dataDirectory) {
    options.env = {}
    options.env.IPFS_PATH = dataDirectory.replace(/\\/g, '/')
  }
  // port check
  options.port = await findGoodPort(4001, '0.0.0.0')
  options.portApi = await findGoodPort(5001)
  options.portGateway = await findGoodPort(8080)
  silent || console.log(options.port, options.portApi, options.portGateway)
  return options
}

export default getIpfsOptions
