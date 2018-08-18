import { eventChannel } from 'redux-saga';

import { ipcRenderer } from 'electron';
import { rendererCalls } from './ipcRenderer';

import ipc from '~shared/data/ipc';

async function getMetabinDataChannel(channelName) {
  await rendererCalls(ipc.METABIN_GATE_SUBSCRIBE, channelName);
  return eventChannel((emitt) => {
    const handleIncomingMessage = (event, { schemaName, payload }) => {
      if (schemaName === channelName) {
        emitt(payload);
      }
    };
    ipcRenderer.on(ipc.METABIN_GATE_DATA_RECIEVED, handleIncomingMessage);
    return () => {
      ipcRenderer.removeListener(ipc.METABIN_GATE_DATA_RECIEVED, handleIncomingMessage);
      return rendererCalls(ipc.METABIN_GATE_UNLISTEN, channelName);
    };
  });
}

export default getMetabinDataChannel;
