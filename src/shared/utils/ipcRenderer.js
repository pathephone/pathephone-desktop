
import { ipcRenderer } from 'electron'
import { eventChannel, END } from 'redux-saga'

let inc = 0

export const rendererCalls = (chan, ...sendPayload) => {
  return new Promise((resolve, reject) => {
    const handleResponse = (event, { error, payload }) => {
      if (error) {
        reject(new Error(`${chan}: ${error}`))
      } else {
        resolve(payload)
      }
    }
    let id = `${inc++}`
    ipcRenderer.on(id, handleResponse)
    ipcRenderer.send(chan, id, ...sendPayload)
  })
}

export const rendererCallsSaga = (chan, ...sendPayload) => {
  return eventChannel(emit => {
    const handleResponse = (event, response) => {
      emit(response)
      emit(END)
    }
    let id = `${inc++}`
    ipcRenderer.on(id, handleResponse)
    ipcRenderer.send(chan, id, ...sendPayload)
    return () => {
      ipcRenderer.removeListener(id, handleResponse)
    }
  })
}

export const rendererCallsSync = (chan, ...sendPayload) => {
  const { error, payload } = ipcRenderer.sendSync(chan, ...sendPayload)
  if (error) {
    throw new Error(error)
  }
  return payload
}

export const rendererTakes = (channel, handler) => {
  ipcRenderer.on(channel, async (event, id, ...args) => {
    try {
      const payload = await handler(...args)
      event.sender.send(id, { payload })
    } catch (error) {
      event.sender.send(id, { error })
    }
  })
  return () => {
    ipcRenderer.removeListener(channel, handler)
  }
}
