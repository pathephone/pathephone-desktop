// @flow
import React from 'react';
import InitApp from './InitApp';
import Navigation from './Navigation';
import Playlist from './Playlist';
import Page from './Page';
import { Grid } from 'semantic-ui-react';

const App = () => (
  <InitApp>
    <div className='app izi-vw-scale-factor-5 izi--adaptive'>
      <Navigation />
      <Page />
      <Playlist />
    </div>
  </InitApp>
);

export default App;
