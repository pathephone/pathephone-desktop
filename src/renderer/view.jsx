import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppConnected from './view/AppConnected';

import store, { persistor } from './store';

const renderRoot = (Root) => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Root />
        </HashRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('app'),
  );
};

renderRoot(AppConnected);

if (module.hot) {
  module.hot.accept('./view/AppConnected', () => {
    const NextAppConnected = require('./view/AppConnected').default; // eslint-disable-line global-require
    renderRoot(NextAppConnected);
  });
}
