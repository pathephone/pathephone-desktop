import { ipcMain } from 'electron'

export const mainTakes = (channel, handler) => {
  ipcMain.on(channel, async (event, id, ...args) => {
    try {
      const payload = await handler(...args, event)
      event.sender.send(id, { payload })
    } catch (error) {
      event.sender.send(id, { error })
    }
  })
  return () => {
    ipcMain.removeListener(channel, handler)
  }
}
