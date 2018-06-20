import { app } from 'electron'

import fs from 'fs'
import path from 'path'

const beforeIpfsDaemonStart = () => {
  const lockPath = path.join(app.getPath('userData'), 'ipfsRepo', 'repo.lock')
  const apiPath = path.join(app.getPath('userData'), 'ipfsRepo', 'api')
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
}

export default beforeIpfsDaemonStart
