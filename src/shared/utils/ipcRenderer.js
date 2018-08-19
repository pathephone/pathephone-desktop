
import { ipcRenderer } from 'electron';
import { eventChannel, END } from 'redux-saga';

let inc = 0;

export const rendererCalls = (chan, ...sendPayload) => new Promise((resolve, reject) => {
  const handleResponse = (event, { error, payload }) => {
    if (error) {
      reject(new Error(`${chan}: ${error}`));
    } else {
      resolve(payload);
    }
  };
  const id = `${inc += 1}`;
  ipcRenderer.on(id, handleResponse);
  ipcRenderer.send(chan, id, ...sendPayload);
});

export const rendererCallsSaga = (chan, ...sendPayload) => eventChannel((emit) => {
  const handleResponse = (event, response) => {
    emit(response);
    emit(END);
  };
  const id = `${inc += 1}`;
  ipcRenderer.on(id, handleResponse);
  ipcRenderer.send(chan, id, ...sendPayload);
  return () => {
    ipcRenderer.removeListener(id, handleResponse);
  };
});

export const rendererCallsSync = (chan, ...sendPayload) => {
  const { error, payload } = ipcRenderer.sendSync(chan, ...sendPayload);
  if (error) {
    throw new Error(error);
  }
  return payload;
};

export const rendererTakes = (channel, handler) => {
  ipcRenderer.on(channel, async (event, id, ...args) => {
    try {
      const payload = await handler(...args);
      event.sender.send(id, { payload });
    } catch (error) {
      event.sender.send(id, { error });
    }
  });
  return () => {
    ipcRenderer.removeListener(channel, handler);
  };
};
