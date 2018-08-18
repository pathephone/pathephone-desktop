import e2e from '~data/e2e';

export function getNotificationMessage(number) {
  let selector;
  if (number) {
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
  }
  return this.app.client.getText(selector);
}

export async function hideNotificationMessage(number) {
  let selector;
  if (number) {
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
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
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:nth-child(${number})`;
  } else {
    selector = `${e2e.NOTIFICATIONS_CONTAINER_ID} > *:first-child`;
  }
  return this.app.client.waitForExist(selector);
}
