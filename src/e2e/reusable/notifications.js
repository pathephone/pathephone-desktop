import { E2E_NOTIFICATIONS_CONTAINER_ID } from '~data/e2eConstants'

export function getLatestNotificationMessage () {
  const { app } = this
  return app.client.getText(`${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`)
}

export function allNotificationsHaveDisappeared () {
  const { app } = this
  return app.client.waitUntil(async () => {
    return !(await app.client.isExisting(`${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`))
  }, 10000)
}
