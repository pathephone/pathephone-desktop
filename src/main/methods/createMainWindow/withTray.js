import { app, Tray, Menu } from 'electron'

import { RESOURCES_PATH, IS_MAC, IS_LINUX, IS_WINDOWS } from '#config'

export default (mainWindow) => {
  let trayIconPath
  if (IS_MAC || IS_LINUX) {
    trayIconPath = `${RESOURCES_PATH}/indicator_icons/icon16x16.png`
  }
  if (IS_WINDOWS) {
    trayIconPath = `${RESOURCES_PATH}/indicator_icons/icon16x16@2x.png`
  }
  const tray = new Tray(trayIconPath)

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
  mainWindow.on('show', () => {
    tray.setHighlightMode('always')
  })
  mainWindow.on('hide', () => {
    tray.setHighlightMode('never')
  })

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show',
      click: () => {
        mainWindow.show()
      }},
    { label: 'Quit',
      click: () => {
        app.quit()
      }}
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('Pathephone')
}
