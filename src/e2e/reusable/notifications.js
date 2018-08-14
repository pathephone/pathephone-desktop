import { E2E_NOTIFICATIONS_CONTAINER_ID } from '~data/e2eConstants';

export function getNotificationMessage(number) {
  let selector;
  if (number) {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
  }
  return this.app.client.getText(selector);
}

export async function hideNotificationMessage(number) {
  let selector;
  if (number) {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
  }
  const isExisting = await this.app.client.isExisting(selector);
  if (isExisting) {
    return this.app.client.click(selector);
  }
  return undefined;
}

export function waitForNotification(number) {
  let selector;
  if (number) {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
  }
  return this.app.client.waitForExist(selector);
}

export function waitForNoNotifications() {
  const { app } = this;
  return app.client.waitUntil(async () => !(await app.client.isExisting(`${E2E_NOTIFICATIONS_CONTAINER_ID} > *:first-child`)), 10000);
}
