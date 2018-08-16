import React from 'react';
import { ids, i18n } from '~data';

const PendingPlayer = () => (
  <div
    id={ids.PLAYER_PENDING_ID}
    className="player"
  >
    <b className="player__no-playback-message">
      {i18n.NO_PLAYBACK}
    </b>
  </div>
);

export default PendingPlayer;
