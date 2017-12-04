import ipfsDaemonState from '../state/ipfsDaemon'
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

const startIpfs = ({dataDirectory}) => new Promise(async (resolve) => {
  let options = {}
  if (dataDirectory) {
    options.env = {}
    options.env.IPFS_PATH = dataDirectory.replace(/\\/g, '/')
  }
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
    resolve({ stopIpfs })
  },
  onError,
  onUnexpectedClose,
  options
  })
})

module.exports = startIpfs
