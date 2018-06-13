import IPFSFactory from 'ipfsd-ctl'

import beforeIpfsDaemonStart from './startIpfsDaemon/beforeIpfsDaemonStart'

const startIpfsDaemon = params => {
  return new Promise((resolve, reject) => {
    const { disposable, repoPath, startFlags } = params

    const onError = reject
    const onSuccess = resolve

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
