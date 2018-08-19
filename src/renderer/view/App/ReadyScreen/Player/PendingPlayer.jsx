import React from 'react';
import i18n from '~shared/data/i18n';
import e2e from '~shared/data/e2e';

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
