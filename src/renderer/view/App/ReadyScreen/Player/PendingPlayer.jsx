import React from 'react'
import { E2E_PLAYER_PENDING_ID } from '~data/e2eConstants'

const PendingPlayer = () => (
  <div
    id={E2E_PLAYER_PENDING_ID}
    className='player'>
    <b className='player__no-playback-message'>NO PLAYBACK</b>
  </div>
)

export default PendingPlayer
