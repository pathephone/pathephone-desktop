import ipfsDaemonState from '../state/ipfsDaemon'
import portCheck from '~/utils/portReady'
const startIpfsDaemon = require('../modules/ipfs/startIpfsDaemon')
const beforeStartIpfs = require('../modules/ipfs/beforeStartIpfs')

const onReady = () => {
  ipfsDaemonState('STARTED')
}

const onError = (error) => {
  ipfsDaemonState('ERRORED', error)
}

const onUnexpectedClose = () => {
  ipfsDaemonState('CLOSED')
}

const findGoodPort = async (port, host) => {
  while (!(await portCheck(port, host))) {
    port++
  }
  return port
}

const startIpfs = ({dataDirectory}) => new Promise(async (resolve) => {
  let options = {}
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
  startIpfsDaemon({ onReady: (process) => {
    onReady()
    const stopIpfs = () => new Promise((resolve, reject) => {
      ipfsDaemonState(({ started }) => {
        if (started === false) {
          resolve()
        }
      })
      process.kill()
    })
    resolve({ stopIpfs, options })
  },
  onError,
  onUnexpectedClose,
  options
  })
})

module.exports = startIpfs
