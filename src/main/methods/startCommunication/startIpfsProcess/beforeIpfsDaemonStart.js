import { app } from 'electron'
import fs from 'fs'
import path from 'path'

import defaultIPFSDaemonConfig from '~data/defaultIPFSDaemonConfig'

const beforeIpfsDaemonStart = () => {
  const lockPath = path.join(app.getPath('userData'), 'ipfsRepo', 'repo.lock')
  const apiPath = path.join(app.getPath('userData'), 'ipfsRepo', 'api')
  const configPath = path.join(app.getPath('userData'), 'ipfsRepo', 'config')
  if (fs.existsSync(lockPath)) {
    try {
      fs.unlinkSync(lockPath)
    } catch (e) {
      console.log('Could not remove lock. Daemon might be running.')
    }
  }
  if (fs.existsSync(apiPath)) {
    try {
      fs.unlinkSync(apiPath)
    } catch (e) {
      console.log('Could not remove API file. Daemon might be running.')
    }
  }
  if (fs.existsSync(configPath)) {
    try {
      const config = require(configPath)
      config.Addresses = defaultIPFSDaemonConfig.Addresses
      fs.writeFileSync(configPath, JSON.stringify(config), 'utf8')
    } catch (e) {
      console.log('Could not edit ipfs daemon config.')
    }
  }
}

export default beforeIpfsDaemonStart
