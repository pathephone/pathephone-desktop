import { shareAlbum } from '~reusable/sharePage';

import { openSharePage, openDiscoverPage } from '~reusable/navigation';

import {
  discoverFeedLengthEquals,
  discoverAlbumTitleEquals,
  discoverSetSearchValue,
  discoverWaitForFeedExists,
  discoverAlbumArtistEquals,
  discoverWaitForSearchExists,
} from '~reusable/discoverPage';

import album1 from '~shared/data/assets/album1';
import album2 from '~shared/data/assets/album2';

describe('search tests', () => {
  // SEARCH

  before(async function () {
    await openSharePage.call(this);
    await shareAlbum.call(this, album1);
    await shareAlbum.call(this, album2);
    await openDiscoverPage.call(this);
    await discoverWaitForSearchExists.call(this);
  });

  describe('type album1 title', () => {
    before(function () {
      return discoverSetSearchValue.call(this, album1.title);
    });
    it('feed length remains 2', async function () {
      await discoverWaitForFeedExists.call(this);
      return discoverFeedLengthEquals.call(this, 2);
    });
    describe('submit input', () => {
      before(async function () {
        await this.app.client.keys('Enter');
        await discoverWaitForFeedExists.call(this);
      });
      it('feed length equals 1', async function () {
        return discoverFeedLengthEquals.call(this, 1);
      });
      it('feed album title match', function () {
        return discoverAlbumTitleEquals.call(this, 1, album1.title);
      });
    });
  });
  describe('type and submit album1 artist', () => {
    before(async function () {
      await discoverSetSearchValue.call(this, album1.tracks[0].artist);
      await this.app.client.keys('Enter');
    });
    it('feed length equals 2', async function () {
      await discoverWaitForFeedExists.call(this);
      return discoverFeedLengthEquals.call(this, 2);
    });
    it('feed album artist match', async function () {
      return discoverAlbumArtistEquals.call(this, 1, album1.autoArtist);
    });
  });
});
