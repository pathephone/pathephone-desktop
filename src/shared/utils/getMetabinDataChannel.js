import { ipcRenderer } from 'electron'
import { eventChannel } from 'redux-saga'

import { rendererCalls } from '~utils/ipcRenderer'

import {
  IPC_METABIN_GATE_DATA_RECIEVED,
  IPC_METABIN_GATE_LISTEN,
  IPC_METABIN_GATE_UNLISTEN
} from '~data/ipcTypes'

async function getMetabinDataChannel (gateId) {
  await rendererCalls(IPC_METABIN_GATE_LISTEN, gateId)
  return eventChannel(emitt => {
    const handleData = (event, id, payload) => {
      if (id === gateId) {
        emitt(payload)
      }
    }
    ipcRenderer.on(IPC_METABIN_GATE_DATA_RECIEVED, handleData)
    return () => {
      ipcRenderer.removeListener(IPC_METABIN_GATE_DATA_RECIEVED, handleData)
      rendererCalls(IPC_METABIN_GATE_UNLISTEN, gateId)
    }
  })
}

export default getMetabinDataChannel
