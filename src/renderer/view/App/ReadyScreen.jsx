import React from 'react';

import e2e from '~shared/data/e2e';

import Page from './ReadyScreen/Page';
import PlaylistConnected from './ReadyScreen/PlaylistConnected';
import PlayerConnected from './ReadyScreen/PlayerConnected';
import NavigationConnected from './ReadyScreen/NavigationConnected';
import IndicatorsBarConnected from './ReadyScreen/IndicatorsBarConnected';
import Notifications from '~renderer/ui/Notifications';

import './ReadyScreen.css';

const ReadyScreen = () => (
  <div id={e2e.READY_SCREEN_ID} className="readyScreen">
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <IndicatorsBarConnected />
    <Notifications />
  </div>
);

export default ReadyScreen;
