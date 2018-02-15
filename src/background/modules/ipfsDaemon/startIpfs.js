import configureIpfs from './configureIpfs'
import getIpfsOptions from './getIpfsOptions'
const initIpfs = require('./initIpfs')
const getIpfsPath = require('./getIpfsPath')
const beforeStartIpfs = require('./beforeStartIpfs')
const { spawn } = require('child_process')

let killIpfsDaemon

const startIpfsDaemon = ({ silent } = {}) => new Promise(async (resolve, reject) => {
  try {
    if (killIpfsDaemon) {
      resolve(killIpfsDaemon)
      return
    }

    const options = getIpfsOptions({ silent })

    let needIPFSInit = false
    let needIPFSClose = false

    global.portApi = options.portApi

    await beforeStartIpfs(options)

    const ipfsPath = getIpfsPath()

    await configureIpfs(options, ipfsPath)

    const args = ['daemon', '--enable-pubsub-experiment']
    if (process.env.IPFS_OFFLINE === 'true') {
      silent || console.log('-- OFFLINE')
      args.push('--offline')
    }

    const ipfs = spawn(ipfsPath, args, options)

    ipfs.stdout.on('data', (data) => {
      silent || console.log(`ipfs: ${data}`)
      if (data.includes('Daemon is ready')) {
        killIpfsDaemon = () => new Promise((resolve, reject) => {
          needIPFSClose = resolve
          try {
            ipfs.kill()
          } catch (e) {
            reject(e)
          }
        })
        silent || console.log('-- ipfs daemon is ready')
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
        silent || console.log('initializing ipfs')
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
        silent || console.log('-- ipfs daemon closed by user')
      } else {
        silent || console.error(`Unexpected ipfs daemon stop with code ${code}`)
        reject(new Error('Unexpexted ipfs daemon stop.'))
      }
    })
  } catch (error) {
    reject(error)
  }
})

module.exports = startIpfsDaemon
