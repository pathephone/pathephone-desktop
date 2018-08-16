import { ids } from '~data';

export function playlistWaitForTracklist() {
  return this.app.client.waitForExist(ids.PLAYLIST_TRAKLIST_ID);
}

export async function playlistTracklistLengthEquals(expected) {
  const elements = await this.app.client
    .$$(`${ids.PLAYLIST_TRAKLIST_ID} > *`);
  expect(elements.length).equal(expected);
}

export function playlistWaitForTrackByOrder(order) {
  return this.app.client
    .$(`${ids.PLAYLIST_TRAKLIST_ID} > *:nth-child(${order})`);
}

export function playlistClear() {
  return this.app.client.click(ids.PLAYLIST_CLEAR_BUTTON_ID);
}
