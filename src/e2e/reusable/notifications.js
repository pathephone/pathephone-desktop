import { E2E_NOTIFICATIONS_CONTAINER_ID } from '~data/e2eConstants'

export function getNotificationMessage (number) {
  let selector
  if (number) {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`
  } else {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`
  }
  return this.app.client.getText(selector)
}

export function waitForNotification (number) {
  let selector
  if (number) {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`
  } else {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`
  }
  return this.app.client.waitForExist(selector)
}

export function allNotificationsHaveDisappeared () {
  const { app } = this
  return app.client.waitUntil(async () => {
    return !(await app.client.isExisting(`${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`))
  }, 10000)
}
