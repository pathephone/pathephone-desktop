import { app, Tray, Menu } from 'electron';

import {
  RESOURCES_PATH, IS_MAC, IS_LINUX, IS_WINDOWS,
} from '~shared/config';

export default (mainWindow) => {
  let trayIconPath;
  if (IS_LINUX) {
    trayIconPath = `${RESOURCES_PATH}/indicator_icons/icon16x16.png`;
  }
  if (IS_WINDOWS) {
    trayIconPath = `${RESOURCES_PATH}/indicator_icons/icon16x16@2x.png`;
  }
  if (IS_MAC) {
    trayIconPath = `${RESOURCES_PATH}/indicator_icons/icon16x16Template.png`;
  }
  const tray = new Tray(trayIconPath);

  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip('Pathephone');
};
