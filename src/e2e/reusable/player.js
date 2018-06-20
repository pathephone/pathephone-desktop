import {
  E2E_PLAYER_ACTIVE_ID
} from '~data/e2eConstants'

export function playerWaitForActiveStatus () {
  return this.app.client
    .waitForExist(E2E_PLAYER_ACTIVE_ID)
}
