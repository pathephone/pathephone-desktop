import IPFSFactory from 'ipfsd-ctl'

import startIpfsApi from './startIpfsDaemon/startIpfsApi'
import startMetabinApi from './startIpfsDaemon/startMetabinApi'
import beforeIpfsDaemonStart from './startIpfsDaemon/beforeIpfsDaemonStart'

let ipfsDaemon = null

const startIpfsDaemon = params => {
  const { window, disposable, repoPath, startFlags } = params
  if (ipfsDaemon) return ipfsDaemon
  return new Promise((resolve, reject) => {
    const onError = (error) => {
      reject(error)
    }
    const onSuccess = (node) => {
      const stopIpfsApi = startIpfsApi(node)
      const stopMetabinApi = startMetabinApi(node, window)
      const stopIpfsDaemon = () => {
        return new Promise((resolve, reject) => {
          stopMetabinApi()
          stopIpfsApi()
          node.stop((err) => {
            if (err) {
              reject(err)
            } else {
              resolve()
            }
          })
          ipfsDaemon = null
        })
      }
      const gateway = `http://${node.api.gatewayHost}:${node.api.gatewayPort}`
      ipfsDaemon = {
        gateway, stopIpfsDaemon
      }
      resolve(ipfsDaemon)
    }

    const startIpfsNode = (node) => {
      const startCallback = (err) => {
        if (err) {
          onError(err)
        } else {
          onSuccess(node)
        }
      }
      node.start(startFlags, startCallback)
    }

    const initCallback = (err, node) => {
      if (err) {
        onError(err)
      } else {
        startIpfsNode(node)
      }
    }

    const spawnCallback = (err, node) => {
      if (err) {
        onError(err)
      } else {
        if (node.disposable) {
          onSuccess(node)
        } else
        if (node.initialized) {
          startIpfsNode(node)
        } else {
          node.init(initCallback)
        }
      }
    }

    beforeIpfsDaemonStart()

    IPFSFactory
      .create({ type: 'go' })
      .spawn({ disposable, repoPath }, spawnCallback)
  })
}

export default startIpfsDaemon
