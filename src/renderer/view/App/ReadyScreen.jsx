import React from 'react';

import e2e from '~shared/data/e2e';

import Page from './ReadyScreen/Page';
import PlaylistConnected from './ReadyScreen/PlaylistConnected';
import PlayerConnected from './ReadyScreen/PlayerConnected';
import NavigationConnected from './ReadyScreen/NavigationConnected';
import NotificationsConnected from './ReadyScreen/NotificationsConnected';
import IndicatorsBarConnected from './ReadyScreen/IndicatorsBarConnected';

import './ReadyScreen.css';

const ReadyScreen = () => (
  <div id={e2e.READY_SCREEN_ID} className="readyScreen">
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <IndicatorsBarConnected />
    <NotificationsConnected />
  </div>
);

export default ReadyScreen;
