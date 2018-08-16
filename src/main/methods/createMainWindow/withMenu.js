import { BrowserWindow, Menu, app } from 'electron';

import { IS_PRODUCTION } from '#config';

const devMenuTemplate = {
  label: 'Development',
  submenu: [
    {
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: () => {
        BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
      },
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+CmdOrCtrl+I',
      click: () => {
        BrowserWindow.getFocusedWindow().toggleDevTools();
      },
    },
    {
      label: 'Quit',
      accelerator: 'CmdOrCtrl+Q',
      click: () => {
        app.quit();
      },
    },
  ],
};

const withMenu = (window) => {
  if (!IS_PRODUCTION) {
    window.setMenu(Menu.buildFromTemplate([devMenuTemplate]));
  }
};

export default withMenu;
