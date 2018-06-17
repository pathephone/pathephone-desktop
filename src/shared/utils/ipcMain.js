import { ipcMain } from 'electron'

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
