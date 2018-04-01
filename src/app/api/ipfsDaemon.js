import { remote } from 'electron'

const api = {}

api.start = async () => {
  const startIpfsDaemon = remote.getGlobal('startIpfsDaemon')
  api.stop = await startIpfsDaemon()
}

export default api
