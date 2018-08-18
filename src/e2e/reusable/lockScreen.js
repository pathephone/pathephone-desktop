import e2e from '~data/e2e';

/* eslint-disable import/prefer-default-export */

export async function lockScreenWaitForNotExists() {
  await this.app.client.waitUntil(async () => {
    const isExisting = await this.app.client.isExisting(e2e.LOCK_SCREEN_ID);
    return !isExisting;
  }, 30000);
  await new Promise(resolve => setTimeout(resolve, 500));
}
