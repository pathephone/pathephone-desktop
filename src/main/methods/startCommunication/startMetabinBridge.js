import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_METABIN_GATE_SEND_EACH,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_UNSUBSCRIBE,
  IPC_METABIN_GET_RECIEVED_DATA_CACHE
} from '~data/ipcTypes'

const startMetabinBridge = ({ ipfsProcessPromise }) => {
  const handleSend = async (schemaName, data) => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_METABIN_GATE_SEND_EACH, payload: { schemaName, data } })
  }

  const handleSubscribe = async (schemaName, event) => {
    let ipcUnlistener
    const ipfsProcess = await ipfsProcessPromise
    await ipfsProcess.call({ type: IPC_METABIN_GATE_SUBSCRIBE, payload: schemaName })

    const handleUnlisten = async schemaNameToUnlisten => {
      if (schemaNameToUnlisten === schemaName) {
        ipcUnlistener()
        await ipfsProcess.call({ type: IPC_METABIN_GATE_UNSUBSCRIBE, payload: schemaName })
      }
    }
    ipcUnlistener = ipcMainTake(IPC_METABIN_GATE_UNSUBSCRIBE, handleUnlisten)
  }

  const handleGetCache = async (schemaName) => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({
      type: IPC_METABIN_GET_RECIEVED_DATA_CACHE,
      payload: schemaName
    })
  }

  const ipcUnlisteners = [
    ipcMainTake(IPC_METABIN_GATE_SEND_EACH, handleSend),
    ipcMainTake(IPC_METABIN_GATE_SUBSCRIBE, handleSubscribe),
    ipcMainTake(IPC_METABIN_GET_RECIEVED_DATA_CACHE, handleGetCache)
  ]
  return () => {
    ipcUnlisteners
      .forEach(unlisten => unlisten())
  }
}

export default startMetabinBridge
