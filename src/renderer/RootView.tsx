import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AppConnected from './view/AppConnected';

import store, { persistor } from './store';

const RootView = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <AppConnected />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default RootView;
