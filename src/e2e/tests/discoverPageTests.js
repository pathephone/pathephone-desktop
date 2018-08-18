import { shareAlbum } from '~reusable/sharePage';

import { openSharePage, openDiscoverPage } from '~reusable/navigation';

import e2e from '~data/e2e';

import album1 from '~data/assets/album2';
import { startApp, closeApp } from '~reusable/app';

describe('DISCOVER PAGE TESTS', () => {
  // ALBUM SELECTION

  before(async function () {
    await startApp.call(this);
    await openSharePage.call(this);
    await shareAlbum.call(this, album1);
    await openDiscoverPage.call(this);
    await this.app.client.waitForExist(e2e.DISCOVER_FEED_ID);
  });

  require('./discoverPageTests/albumActionsTests');
  require('./discoverPageTests/selectAlbumTests');
  require('./discoverPageTests/selectedActionsTests');
  require('./discoverPageTests/searchTests.js');
  require('./discoverPageTests/paginationTests.js');

  after(closeApp);
});
