import * as React from 'react';

import e2e from '~shared/data/e2e';

import { IndicatorsBarsConnected } from '~renderer/ui/IndicatorsBar';
import { NavigationConnected } from '~renderer/ui/Navigation';
import { NotificationsConnected } from '~renderer/ui/Notifications';
import { PlayerConnected } from '~renderer/ui/Player';
import { PlaylistConnected } from '~renderer/ui/Playlist';
import Page from '~renderer/view/App/ReadyScreen/Page';

import './ReadyScreen.css';

export const ReadyScreen: React.SFC = () : React.ReactElement<void> => (
  <div id={e2e.READY_SCREEN_ID} className='readyScreen'>
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <IndicatorsBarsConnected />
    <NotificationsConnected />
  </div>
);
