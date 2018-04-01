const getIpfsPath = require('./getIpfsPath')
const { exec } = require('child_process')

const beforeStartIpfs = (options) => new Promise((resolve, reject) => {
  exec(`${getIpfsPath()} repo fsck`, options, (err) => {
    if (err) {
      reject(err)
    }
    resolve()
  })
})

module.exports = beforeStartIpfs
