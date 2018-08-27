import * as React from 'react';
import * as reactDOM from 'react-dom';

import RootView from './RootView';

const renderRoot = (Root) => {
  reactDOM.render(
    <Root/>,
    document.getElementById('app'),
  );
};

renderRoot(RootView);

if (module.hot) {
  module.hot.accept('./RootView', () => {
    const nextRoot = require('./RootView').default;
    renderRoot(nextRoot);
  });
}
