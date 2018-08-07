import { app } from 'electron';

import withEnvironment from './methods/withEnvironment';
import startCommunication from './methods/startCommunication';
import createMainWindow from './methods/createMainWindow';
import loadMainWindow from './methods/loadMainWindow';
import withSingleInstanceBehaviour from './methods/withSingleInstanceBehaviour';
import { HAS_TRAY } from '#config';

const state = {
  mainWindow: null,
  isReadyToQuit: false,
  isQuiting: false,
};

withSingleInstanceBehaviour(state);

withEnvironment();

const handleReady = () => {
  console.log('-- starting ipc');

  const communicationPromise = startCommunication();

  console.log('-- loading main window');

  state.mainWindow = createMainWindow();

  const handleClose = (e) => {
    if (HAS_TRAY && !state.isReadyToQuit) {
      e.preventDefault();
      state.mainWindow.hide();
    }
  };

  state.mainWindow.on('close', handleClose);

  const handleClosed = () => {
    state.mainWindow = null;
    console.log('-- window reference destroyed');
  };

  state.mainWindow.on('closed', handleClosed);

  const handleAllClosed = () => {
    app.quit();
  };

  app.on('window-all-closed', handleAllClosed);

  const handleBeforeQuit = async (e) => {
    if (state.isQuiting || !state.isReadyToQuit) {
      e.preventDefault();
      console.log('-- app quit prevented');
    }
    if (!state.isReadyToQuit) {
      state.isQuiting = true;
      try {
        const stopCommunication = await communicationPromise;
        await stopCommunication();
        console.log('-- app ready to quit');
      } catch (error) {
        console.error(error);
      }
      state.isReadyToQuit = true;
      state.isQuiting = false;
      app.quit();
    }
  };

  app.on('before-quit', handleBeforeQuit);

  loadMainWindow(state.mainWindow);
};

app.on('ready', handleReady);
