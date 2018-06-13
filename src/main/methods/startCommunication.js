import startIpfsApi from './startIpfsApi'
import startMetabinApi from './startMetabinApi'
import { IPC_IPFS_START } from '~data/ipcTypes'
import { ipcMainTake } from '~utils/ipcMain'

const startCommunication = (params) => {
  const stopIpfsApi = startIpfsApi(params)
  const stopMetabinApi = startMetabinApi(params)
  const handleStartRequest = async () => {
    const { ipfsDaemonPromise } = params
    const { api } = await ipfsDaemonPromise
    const gateway = `http://${api.gatewayHost}:${api.gatewayPort}`
    return { gateway }
  }
  const stopListener = ipcMainTake(IPC_IPFS_START, handleStartRequest)
  return {
    async stop () {
      stopListener()
      await stopMetabinApi()
      await stopIpfsApi()
    }
  }
}

export default startCommunication
