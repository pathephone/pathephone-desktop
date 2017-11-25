const ps = require('ps-node')

const checkForStartedIpfsDaemon = () => new Promise(
  (resolve, reject) => {
    ps.lookup({ command: 'ipfs' }, (err, resultList) => {
      if (err) {
        throw new Error(err)
      }

      if (resultList.length > 0) {
        console.log('ipfs already started, simply load main window')
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }
)

export default checkForStartedIpfsDaemon
