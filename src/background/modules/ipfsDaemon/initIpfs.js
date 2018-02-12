const { exec } = require('child_process')
const getIpfsPath = require('./getIpfsPath')

const initIpfs = (options) => new Promise((resolve, reject) => {
  exec(`${getIpfsPath()} init`, options, (error, stdout, stderr) => {
    if (error) reject(error)
    resolve({ stdout, stderr })
  })
})

module.exports = initIpfs
