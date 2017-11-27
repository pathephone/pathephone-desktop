const startIpfsDaemon = require('../modules/ipfs/startIpfsDaemon')
const beforeStartIpfs = require('../modules/ipfs/beforeStartIpfs')
import ipfsDaemonState from '../state/ipfsDaemon'

const onReady = () => {
  ipfsDaemonState('STARTED')
}

const onError = (error) => {
  ipfsDaemonState('ERRORED', error)
}

const onUnexpectedClose = () => {
  ipfsDaemonState('CLOSED')
}

const startIpfs = async () => {
  await beforeStartIpfs()
  const process = await startIpfsDaemon({ onReady, onError, onUnexpectedClose })
  const stopIpfs = () => new Promise((resolve, reject) => {
    ipfsDaemonState(({ started }) => {
      if (started === false) {
        resolve()
      }
    })
    process.kill()
  })
  return { stopIpfs }
}

module.exports = startIpfs
