import React from 'react';
import { i18n } from '~data';
import e2e from '~data/e2e';

const PendingPlayer = () => (
  <div
    id={e2e.PLAYER_PENDING_ID}
    className="player"
  >
    <b className="player__no-playback-message">
      {i18n.NO_PLAYBACK}
    </b>
  </div>
);

export default PendingPlayer;
