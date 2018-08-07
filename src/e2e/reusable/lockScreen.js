import { E2E_LOCK_SCREEN_ID } from '~data/e2eConstants';

export async function lockScreenWaitForNotExists() {
  await this.app.client.waitUntil(async () => {
    const isExisting = await this.app.client.isExisting(E2E_LOCK_SCREEN_ID);
    return !isExisting;
  }, 30000);
  await new Promise(resolve => setTimeout(resolve, 500));
}
