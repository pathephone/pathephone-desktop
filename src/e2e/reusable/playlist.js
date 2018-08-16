import {
  E2E_PLAYLIST_TRAKLIST_ID,
  E2E_PLAYLIST_CLEAR_BUTTON_ID,
} from '~data/e2eConstants';

export function playlistWaitForTracklist() {
  return this.app.client.waitForExist(E2E_PLAYLIST_TRAKLIST_ID);
}

export async function playlistTracklistLengthEquals(expected) {
  const elements = await this.app.client
    .$$(`${E2E_PLAYLIST_TRAKLIST_ID} > *`);
  expect(elements.length).equal(expected);
}

export function playlistWaitForTrackByOrder(order) {
  return this.app.client
    .$(`${E2E_PLAYLIST_TRAKLIST_ID} > *:nth-child(${order})`);
}

export function playlistClear() {
  return this.app.client.click(E2E_PLAYLIST_CLEAR_BUTTON_ID);
}
