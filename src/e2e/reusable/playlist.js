import e2e from '~shared/data/e2e';

export function playlistWaitForTracklist() {
  return this.app.client.waitForExist(e2e.PLAYLIST_TRAKLIST_ID);
}

export async function playlistTracklistLengthEquals(expected) {
  const elements = await this.app.client
    .$$(`${e2e.PLAYLIST_TRAKLIST_ID} > *`);
  expect(elements.length).equal(expected);
}

export function playlistWaitForTrackByOrder(order) {
  return this.app.client
    .$(`${e2e.PLAYLIST_TRAKLIST_ID} > *:nth-child(${order})`);
}

export function playlistClear() {
  return this.app.client.click(e2e.PLAYLIST_CLEAR_BUTTON_ID);
}
