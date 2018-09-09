import * as React from 'react';
import * as reactDOM from 'react-dom';

import { RootView } from '~renderer/RootView';

type IRederRoot = (p: React.StatelessComponent) => void;

const renderRoot: IRederRoot = (Root: React.StatelessComponent) : void => {
  reactDOM.render(
    <Root/>,
    document.getElementById('app')
  );
};

renderRoot(RootView);

if (module.hot) {
  module.hot.accept('./RootView', () => {
    // tslint:disable-next-line no-require-imports
    const nextRoot: React.StatelessComponent = require('./RootView').default;
    renderRoot(nextRoot);
  });
}
