const { exec } = require('child_process')
const getIpfsPath = require('./getIpfsPath')

const initIpfs = () => new Promise((resolve, reject) => {
  exec(`${getIpfsPath()} init`, (error, stdout, stderr) => {
    if (error) reject(error)
    resolve({ stdout, stderr })
  })
})

module.exports = initIpfs
