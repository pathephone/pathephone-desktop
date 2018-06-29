import { E2E_LOCK_SCREEN_ID } from '~data/e2eConstants'

export function lockScreenWaitForNotExists () {
  return this.app.client.waitUntil(async () => {
    const isExisting = await this.app.client.isExisting(E2E_LOCK_SCREEN_ID)
    return !isExisting
  }, 30000)
}
