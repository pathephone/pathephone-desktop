import e2e from '~data/e2e';

export function playerWaitForActiveStatus() { // eslint-disable-line import/prefer-default-export
  return this.app.client
    .waitForExist(e2e.PLAYER_ACTIVE_ID);
}
