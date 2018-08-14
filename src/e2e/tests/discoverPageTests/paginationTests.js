import { shareAlbum } from '~reusable/sharePage';

import { openSharePage, openDiscoverPage } from '~reusable/navigation';

import {
  E2E_DISCOVER_FEED_ID,
} from '~data/e2eConstants';
import {
  DISCOVER_FEED_LIMIT,
} from '~data/constants';

import album1 from '~data/assets/album2';
import {
  discoverFeedLengthEquals,
  discoverAlbumTitleEquals,
} from '~reusable/discoverPage';
import { hideNotificationMessage, waitForNotification } from '~reusable/notifications';

const ALBUMS_COUNT = DISCOVER_FEED_LIMIT + 1;

describe('pagination tests', () => {
  // ALBUM SELECTION

  before(async function () {
    this.timeout(120000);
    await openSharePage.call(this);
    let inc = 1;
    const publishNextAlbum = async () => {
      if (inc > ALBUMS_COUNT) return;
      await shareAlbum.call(this, album1, `album ${inc}`);
      await hideNotificationMessage.call(this);
      inc += 1;
      await publishNextAlbum();
    };
    await publishNextAlbum();
    await openDiscoverPage.call(this);
    await this.app.client.waitForExist(E2E_DISCOVER_FEED_ID);
  });

  it(`feed length must be ${DISCOVER_FEED_LIMIT}`, async function () {
    return discoverFeedLengthEquals.call(this, DISCOVER_FEED_LIMIT);
  });

  describe('albums must be ordered from newest to oldest', () => {
    for (let i = 1; i <= DISCOVER_FEED_LIMIT; i += 1) {
      const name = `album ${ALBUMS_COUNT + 1 - i}`;
      it(`album #${i} should be named "${name}"`, function () {
        return discoverAlbumTitleEquals.call(this, i, name);
      });
    }
  });
});
