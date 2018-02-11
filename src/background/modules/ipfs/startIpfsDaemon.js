const initIpfs = require('./initIpfs')
const getIpfsPath = require('./getIpfsPath')
const { spawn } = require('child_process')
const util = require('util')
require('util.promisify').shim()
const exec = util.promisify(require('child_process').exec)

const startIpfsDaemon = (options) => new Promise(async (resolve, reject) => {
  let needIPFSInit = false
  let needIPFSClose = false
  const ipfsPath = getIpfsPath()

  try {
    if (options.port) { await exec(`${ipfsPath} config --json Addresses.Swarm "[\\"/ip4/0.0.0.0/tcp/${options.port}\\", \\"/ip6/::/tcp/${options.port}\\"]"`, options) }
    if (options.portApi) { await exec(`${ipfsPath} config Addresses.API "/ip4/127.0.0.1/tcp/${options.portApi}"`, options) }
    if (options.portGateway) { await exec(`${ipfsPath} config Addresses.Gateway "/ip4/127.0.0.1/tcp/${options.portGateway}"`, options) }
  } catch (e) {

  }

  const args = ['daemon', '--enable-pubsub-experiment']
  if (process.env.IPFS_OFFLINE === 'true') {
    console.log('-- OFFLINE')
    args.push('--offline')
  }

  const ipfs = spawn(ipfsPath, args, options)

  ipfs.stdout.on('data', (data) => {
    console.log(`ipfs: ${data}`)
    if (data.includes('Daemon is ready')) {
      const killIpfsDaemon = () => new Promise((resolve, reject) => {
        needIPFSClose = resolve
        try {
          ipfs.kill()
        } catch (e) {
          reject(e)
        }
      })
      console.log('-- ipfs daemon is ready')
      resolve(killIpfsDaemon)
    }
  })

  ipfs.stderr.on('data', (data) => {
    if (data.includes('ipfs init')) {
      needIPFSInit = true
    } else {
      reject(new Error('Unexpected error on IPFS start.'))
    }
  })

  ipfs.on('close', async (code) => {
    if (needIPFSInit) {
      console.log('initializing ipfs')
      await initIpfs(options)
      try {
        const resolved = await startIpfsDaemon(options)
        resolve(resolved)
      } catch (error) {
        reject(error)
      }
    } else
    if (needIPFSClose) {
      needIPFSClose()
      console.log('-- ipfs daemon closed by user')
    } else {
      console.error(`Unexpected ipfs daemon stop with code ${code}`)
      reject(new Error('Unexpexted ipfs daemon stop.'))
    }
  })
})

module.exports = startIpfsDaemon
