
import e2e from '~shared/data/e2e';

export async function openDiscoverPage() {
  const { app } = this;
  await app.client.click(e2e.NAV_DISCOVER_LINK_ID);
  await app.client.waitForExist(e2e.DISCOVER_PAGE_ID);
}

export async function discoverFeedDoesNotExist() {
  const { app } = this;
  const isFeedExists = await app.client.isExisting(e2e.DISCOVER_FEED_ID);
  expect(isFeedExists).equal(false);
}

export async function discoverWaitForFeedExists() {
  return this.app.client.waitForExist(e2e.DISCOVER_FEED_ID);
}

export async function discoverWaitForSearchExists() {
  return this.app.client.waitForExist(e2e.DISCOVER_PAGE_SEARCH_INPUT_ID);
}

export async function discoverFeedExists() {
  const { app } = this;
  const isFeedExists = await app.client.isExisting(e2e.DISCOVER_FEED_ID);
  expect(isFeedExists).equal(true);
}

export async function discoverGetFeedLength() {
  const feedItems = await this.app.client.$$(`${e2e.DISCOVER_FEED_ID} > *`);
  return feedItems.length;
}

export async function discoverFeedLengthEquals(number) {
  const length = await discoverGetFeedLength.call(this);
  expect(length).equal(number);
}

export async function discoverFeedAlbumClick(index) {
  let selector;
  if (index) {
    selector = `${e2e.DISCOVER_FEED_ID} > *:nth-child(${index})`;
  } else {
    selector = `${e2e.DISCOVER_FEED_ID} > *:first-child`;
  }
  return this.app.client.click(selector);
}

export function discoverPageSelectedBarExists() {
  return this.app.client.isExisting(e2e.DISCOVER_PAGE_SELECTED_BAR_ID);
}

export async function discoverPageDeleteSelected() {
  await this.app.client.click(e2e.DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID);
  await this.app.client.waitForVisible(e2e.DISCOVER_PAGE_ID);
}

export async function discoverAlbumActionsVisible(index) {
  if (typeof index === 'undefined') throw new Error('argument is missing.');
  const queueSelector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) button[data-e2e="${
    e2e.DISCOVER_ALBUM_QUEUE_BUTTON
  }"]`;
  const queueVisible = await this.app.client
    .isVisible(queueSelector);
  const playSelector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) button[data-e2e="${
    e2e.DISCOVER_ALBUM_PLAY_BUTTON
  }"]`;
  const playVisible = await this.app.client
    .isVisible(playSelector);
  return (queueVisible === true && playVisible === true);
}

export function discoverAlbumPlay(index) {
  const playSelector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) button[data-e2e="${
    e2e.DISCOVER_ALBUM_PLAY_BUTTON
  }"]`;
  return this.app.client.click(playSelector);
}

export function discoverAlbumQueue(index) {
  const queueSelector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) button[data-e2e="${
    e2e.DISCOVER_ALBUM_QUEUE_BUTTON
  }"]`;
  return this.app.client.click(queueSelector);
}

export function discoverAlbumHover(index) {
  const selector = `${e2e.DISCOVER_FEED_ID} > *:nth-child(${index})`;
  return this.app.client
    .moveToObject(selector);
}

export async function discoverAlbumTitleEquals(index, expectedTitle) {
  const selector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) *[data-e2e="${e2e.DISCOVER_ALBUM_TITLE}"]`;
  const title = await this.app.client
    .getText(selector);
  expect(title).equals(expectedTitle);
}

export async function discoverAlbumArtistEquals(index, expectedArtist) {
  const selector = `${
    e2e.DISCOVER_FEED_ID
  } > *:nth-child(${
    index
  }) *[data-e2e="${e2e.DISCOVER_ALBUM_ARTIST}"]`;
  const artist = await this.app.client
    .getText(selector);
  expect(artist).equals(expectedArtist);
}

export function discoverSetSearchValue(value) {
  return this.app.client
    .setValue(e2e.DISCOVER_PAGE_SEARCH_INPUT_ID, value);
}

// export async function discoverClearFeed () {
//   // TODO: find out why isn't working
//   const task = async () => {
//     await discoverWaitForFeedExists.call(this)
//     const length = await discoverGetFeedLength.call(this)
//     if (length === 0) return
//     let inc = 1
//     const click = async () => {
//       if (inc > length) return
//       await discoverFeedAlbumClick.call(this, inc)
//       inc++
//       await click()
//     }
//     await click()
//     await this.app.client.click(e2e.DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID)
//     await task()
//   }
//   return task()
// }
