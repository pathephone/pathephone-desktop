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

const startIpfs = () => new Promise(async (resolve) => {
  await beforeStartIpfs()
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
  onUnexpectedClose })
})

module.exports = startIpfs
