const initIpfs = require('./initIpfs')
const getIpfsPath = require('./getIpfsPath')
const { spawn } = require('child_process')
const util = require('util')
require('util.promisify').shim()
const exec = util.promisify(require('child_process').exec)

const startIpfsDaemon = async ({ options, onReady, onError, onUnexpectedClose }) => {
  let needIPFSInit = false
  const ipfsPath = getIpfsPath()

  if (options.port) { await exec(`${ipfsPath} config --json Addresses.Swarm "[\\"/ip4/0.0.0.0/tcp/${options.port}\\", \\"/ip6/::/tcp/${options.port}\\"]"`, options) }
  if (options.portApi) { await exec(`${ipfsPath} config Addresses.API "/ip4/127.0.0.1/tcp/${options.portApi}"`, options) }
  if (options.portGateway) { await exec(`${ipfsPath} config Addresses.Gateway "/ip4/127.0.0.1/tcp/${options.portGateway}"`, options) }

  const ipfs = spawn(ipfsPath, ['daemon', '--enable-pubsub-experiment'], options)

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
