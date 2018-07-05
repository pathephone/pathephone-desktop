import React from 'react'
import { E2E_PLAYER_PENDING_ID } from '~data/e2eConstants'
import { LOCAL_NO_PLAYBACK } from '~data/i18nConstants'

const PendingPlayer = () => (
  <div
    id={E2E_PLAYER_PENDING_ID}
    className='player'>
    <b className='player__no-playback-message'>{LOCAL_NO_PLAYBACK}</b>
  </div>
)

export default PendingPlayer
