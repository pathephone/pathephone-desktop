import React from 'react';

import { ids } from '~data';

import Page from './ReadyScreen/Page';
import PlaylistConnected from './ReadyScreen/PlaylistConnected';
import PlayerConnected from './ReadyScreen/PlayerConnected';
import NavigationConnected from './ReadyScreen/NavigationConnected';
import NotificationsConnected from './ReadyScreen/NotificationsConnected';
import IndicatorsBarConnected from './ReadyScreen/IndicatorsBarConnected';

import './ReadyScreen.css';

const ReadyScreen = () => (
  <div id={ids.READY_SCREEN_ID} className="readyScreen">
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <IndicatorsBarConnected />
    <NotificationsConnected />
  </div>
);

export default ReadyScreen;
