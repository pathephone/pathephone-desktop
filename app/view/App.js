// @flow
import React from 'react';
import InitApp from './InitApp';
import Navigation from './Navigation';
import Playlist from './Playlist';
import Page from './Page';
import Loader from './Loader';

const App = () => (
  <div className="app izi-vw-scale-factor-5 izi--adaptive">
    <Navigation />
    <Page />
    <Playlist />
    <Loader />
  </div>
);

export default App;
