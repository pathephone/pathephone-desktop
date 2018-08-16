import React from 'react';
import { ids } from '~data';
import { LOCAL_NO_PLAYBACK } from '~data/i18nConstants';

const PendingPlayer = () => (
  <div
    id={ids.PLAYER_PENDING_ID}
    className="player"
  >
    <b className="player__no-playback-message">
      {LOCAL_NO_PLAYBACK}
    </b>
  </div>
);

export default PendingPlayer;
