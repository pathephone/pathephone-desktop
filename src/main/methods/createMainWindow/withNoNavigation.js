import { shell } from 'electron'

const withNoNavigation = mainWindow => {
  const handleWillNavigate = (e, url) => {
    e.preventDefault()
    if (url !== mainWindow.webContents.getURL()) {
      shell.openExternal(url)
    }
  }
  mainWindow.webContents.on('will-navigate', handleWillNavigate)
}

export default withNoNavigation
