import { ipcMain } from 'electron'
import { fork } from 'child_process'
import path from 'path'

export const createThreadMethod = handler => {
  const handleMessage = async ({ payload }) => {
    try {
      const output = await handler(payload)
      process.send({ payload: output })
    } catch (error) {
      console.error(error)
      process.send({ errorMessage: error.message })
    }
    process.exit()
  }
  process.on('message', handleMessage)
}

export const callThread = (name, payload) => {
  return new Promise((resolve, reject) => {
    const process = fork(path.resolve(__dirname, `threads/${name}.thread.js`))
    const handleResponse = ({ errorMessage, payload }) => {
      if (errorMessage) {
        reject(new Error(errorMessage))
      } else {
        resolve(payload)
      }
    }
    process.on('message', handleResponse)
    process.send({ payload })
  })
}

export const ipcMainTake = (channel, handler) => {
  ipcMain.on(channel, async (event, id, ...args) => {
    try {
      const payload = await handler(...args, event)
      event.sender.send(id, { payload })
    } catch (error) {
      event.sender.send(id, { error: error.message })
    }
  })
  return () => {
    ipcMain.removeListener(channel, handler)
  }
}

export const ipcMainTakeSync = (channel, handler) => {
  ipcMain.on(channel, async (event, ...args) => {
    try {
      const payload = await handler(...args, event)
      event.returnValue = { payload }
    } catch (error) {
      event.returnValue = { error: error.message }
    }
  })
  return () => {
    ipcMain.removeListener(channel, handler)
  }
}
