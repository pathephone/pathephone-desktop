// @flow
import React from 'react';
import InitApp from './InitApp';
import Navigation from './Navigation';
import Page from './Page';

const App = () => (
  <InitApp>
    <div className="izi--adaptive">
      <Page />
      <Navigation />
    </div>
  </InitApp>
);

export default App;
