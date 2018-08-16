import { ids } from '~data';

export function playerWaitForActiveStatus() { // eslint-disable-line import/prefer-default-export
  return this.app.client
    .waitForExist(ids.PLAYER_ACTIVE_ID);
}
