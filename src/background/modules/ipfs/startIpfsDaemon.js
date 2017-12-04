const initIpfs = require('./initIpfs')
const getIpfsPath = require('./getIpfsPath')
const { spawn } = require('child_process')

const startIpfsDaemon = ({ options, onReady, onError, onUnexpectedClose }) => {
  let needIPFSInit = false
  const ipfs = spawn(getIpfsPath(), ['daemon', '--enable-pubsub-experiment'], options)

  ipfs.stdout.on('data', (data) => {
    console.log(`ipfs: ${data}`)
    if (data.includes('Daemon is ready')) {
      console.log('catched ipfs start')
      onReady(ipfs)
    }
  })

  ipfs.stderr.on('data', (data) => {
    if (data.includes('ipfs init')) {
      console.log('need ipfs initialization')
      needIPFSInit = true
    } else {
      onError(new Error('Unexpected error on IPFS start.'))
    }
  })

  ipfs.on('close', async (code) => {
    if (needIPFSInit) {
      console.log('start ipfs init')
      await initIpfs(options)
      startIpfsDaemon({options, onError, onReady, onUnexpectedClose})
    } else {
      onUnexpectedClose()
      console.log(`ipfs closed with code ${code}`)
    }
  })
}

module.exports = startIpfsDaemon
