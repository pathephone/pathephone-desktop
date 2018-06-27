import startIpfsApi from './startIpfsApi'
import startMetabinApi from './startMetabinApi'
import { IPC_IPFS_START } from '~data/ipcTypes'
import { ipcMainTake } from '~utils/ipcMain'
import startFsApi from './startCommunication/startFsApi'

const startCommunication = (params) => {
  const stopIpfsApi = startIpfsApi(params)
  const stopMetabinApi = startMetabinApi(params)
  const stopFsApi = startFsApi(params)
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
      stopFsApi()
      await stopMetabinApi()
      stopIpfsApi()
    }
  }
}

export default startCommunication
