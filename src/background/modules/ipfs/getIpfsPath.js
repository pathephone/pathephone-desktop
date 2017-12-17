import path from 'path'
const fs = require('fs')

const getRelativeIpfsPath = () => {
  if (fs.existsSync('./ipfs')) {
    return './ipfs'
  }

  if (/^win/.test(process.platform) && fs.existsSync('./ipfs.exe')) {
    return './ipfs.exe'
  }

  if (fs.existsSync(fs.realpathSync(__dirname) + '/ipfs')) {
    return fs.realpathSync(__dirname) + '/ipfs'
  }

  if (fs.existsSync(fs.realpathSync(path.join(__dirname, '/../../..')) + '/ipfs')) {
    return fs.realpathSync(path.join(__dirname, '/../../..')) + '/ipfs'
  }

  if (process.platform === 'darwin' && fs.existsSync(fs.realpathSync(path.join(__dirname, '/../../../MacOS')) + '/ipfs')) {
    return fs.realpathSync(path.join(__dirname, '/../../../MacOS')) + '/ipfs'
  }

  if (/^win/.test(process.platform) && fs.existsSync('imports/win/ipfs.exe')) {
    return 'imports/win/ipfs.exe'
  }

  if (process.platform === 'linux' && fs.existsSync('imports/linux/ipfs')) {
    return 'imports/linux/ipfs'
  }

  if (process.platform === 'darwin' && fs.existsSync('imports/darwin/ipfs')) {
    return 'imports/darwin/ipfs'
  }

  return 'ipfs'
}

const getAbsoluteIpfsPath = () => path.resolve(getRelativeIpfsPath())

module.exports = getAbsoluteIpfsPath
