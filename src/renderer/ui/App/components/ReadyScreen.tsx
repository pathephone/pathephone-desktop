import * as React from 'react';

import e2e from '~shared/data/e2e';

import Notifications from '~renderer/ui/Notifications';
import { PlayerConnected } from '~renderer/ui/Player';
import IndicatorsBarConnected from '~renderer/view/App/ReadyScreen/IndicatorsBarConnected';
import NavigationConnected from '~renderer/view/App/ReadyScreen/NavigationConnected';
import Page from '~renderer/view/App/ReadyScreen/Page';
import PlaylistConnected from '~renderer/view/App/ReadyScreen/PlaylistConnected';

// tslint:disable-next-line
import './ReadyScreen.css';

export const ReadyScreen: React.SFC = () : React.ReactElement<void> => (
  <div id={e2e.READY_SCREEN_ID} className='readyScreen'>
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <IndicatorsBarConnected />
    <Notifications />
  </div>
);
