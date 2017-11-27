const getIpfsPath = require('./getIpfsPath')
const { exec } = require('child_process')

const beforeStartIpfs = () => new Promise((resolve, reject) => {
  exec(`${getIpfsPath()} repo fsck`, (err) => {
    if (err) {
      reject(err)
    }
    resolve()
  })
})

module.exports = beforeStartIpfs
