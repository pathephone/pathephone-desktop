import { eventChannel } from 'redux-saga'

import { rendererCalls } from './ipcRenderer'

import {
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_UNLISTEN,
  IPC_METABIN_GATE_DATA_RECIEVED
} from '~data/ipcTypes'
import { ipcRenderer } from 'electron'

async function getMetabinDataChannel (channelName) {
  await rendererCalls(IPC_METABIN_GATE_SUBSCRIBE, channelName)
  return eventChannel(emitt => {
    const handleIncomingMessage = (event, { schemaName, payload }) => {
      if (schemaName === channelName) {
        emitt(payload)
      }
    }
    ipcRenderer.on(IPC_METABIN_GATE_DATA_RECIEVED, handleIncomingMessage)
    return () => {
      ipcRenderer.removeListener(IPC_METABIN_GATE_DATA_RECIEVED, handleIncomingMessage)
      return rendererCalls(IPC_METABIN_GATE_UNLISTEN, channelName)
    }
  })
}

export default getMetabinDataChannel
