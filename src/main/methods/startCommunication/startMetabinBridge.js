import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_UNLISTEN,
  IPC_METABIN_GATE_DATA_RECIEVED
} from '~data/ipcTypes'

const startMetabinBridge = ({ ipfsProcessPromise }) => {
  const handleSend = async (schemaName, data) => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_METABIN_GATE_SEND, payload: { schemaName, data } })
  }

  const handleListen = async (schemaName, event) => {
    let ipcUnlistener
    const ipfsProcess = await ipfsProcessPromise
    await ipfsProcess.call({ type: IPC_METABIN_GATE_SUBSCRIBE, payload: schemaName })

    const handleMessage = ({ type, payload }) => {
      if (type === IPC_METABIN_GATE_DATA_RECIEVED) {
        event.sender.send(
          IPC_METABIN_GATE_DATA_RECIEVED, { schemaName, payload }
        )
      }
    }
    ipfsProcess.on('message', handleMessage)

    const handleUnlisten = async schemaNameToUnlisten => {
      if (schemaNameToUnlisten === schemaName) {
        ipfsProcess.removeListener('message', handleMessage)
        ipcUnlistener()
        await ipfsProcess.call({ type: IPC_METABIN_GATE_UNLISTEN, payload: schemaName })
      }
    }
    ipcUnlistener = ipcMainTake(IPC_METABIN_GATE_UNLISTEN, handleUnlisten)
  }

  const ipcUnlisteners = [
    ipcMainTake(IPC_METABIN_GATE_SEND, handleSend),
    ipcMainTake(IPC_METABIN_GATE_SUBSCRIBE, handleListen)
  ]
  return () => {
    ipcUnlisteners
      .forEach(unlisten => unlisten())
  }
}

export default startMetabinBridge
