import album1 from '~data/assets/album1';
import {
  i18n,
} from '~data';

import {
  shareWaitForDropZoneExists,
  shareDropZoneSelect,
  shareFormSelectCover,
  shareFormSubmit,
  shareFormSetAlbumArtist,
  shareFormSetAlbumTitle,
  shareWaitForFormExists,
} from '~reusable/sharePage';
import {
  getNotificationMessage,
  waitForNotification,
  hideNotificationMessage,
} from '~reusable/notifications';
import {
  openDiscoverPage,
  discoverWaitForFeedExists,
  discoverFeedLengthEquals,
  discoverAlbumTitleEquals,
  discoverAlbumArtistEquals,
  discoverFeedAlbumClick,
  discoverPageDeleteSelected,
} from '~reusable/discoverPage';
import { openSharePage } from '~reusable/navigation';
import { lockScreenWaitForNotExists } from '~reusable/lockScreen';

const ALBUM_ARTIST = 'custom artist';
const ALBUM_TITLE = 'custom title';

async function addAlbum() {
  await shareDropZoneSelect.call(this, album1.tracks[0].file);
  await shareWaitForFormExists.call(this);
  await shareFormSelectCover.call(this, album1.cover);
  await shareFormSetAlbumArtist.call(this, ALBUM_ARTIST);
  await shareFormSetAlbumTitle.call(this, ALBUM_TITLE);
}

describe('check submit valid form...', () => {
  describe('...without changes', () => {
    before(async function () {
      await shareDropZoneSelect.call(this, album1.tracks[0].file);
      await shareWaitForFormExists.call(this);
      await shareFormSelectCover.call(this, album1.cover);
    });
    it('throws no error', function () {
      return shareFormSubmit.call(this);
    });
    it('notification appears', async function () {
      await waitForNotification.call(this);
    });
    it('notification message is correct', async function () {
      const message = await getNotificationMessage.call(this);
      await hideNotificationMessage.call(this);
      expect(message).equal(i18n.SHARE_FORM_SUBMIT_SUCCEED);
    });
    it('share drop zone appears', async function () {
      const isExists = await shareWaitForDropZoneExists.call(this);
      expect(isExists).equal(true);
    });
    it('discover feed has 1 album', async function () {
      await openDiscoverPage.call(this);
      await discoverWaitForFeedExists.call(this);
      return discoverFeedLengthEquals.call(this, 1);
    });
    it('discover feed album title match', async function () {
      return discoverAlbumTitleEquals.call(this, 1, album1.title);
    });
    it('discover feed album artist match', async function () {
      return discoverAlbumArtistEquals.call(this, 1, album1.autoArtist);
    });
    after(async function () {
      await lockScreenWaitForNotExists.call(this, 1);
      await discoverFeedAlbumClick.call(this, 1);
      await discoverPageDeleteSelected.call(this);
      await openSharePage.call(this);
    });
  });
  describe('...with changes', () => {
    before(addAlbum);
    it('throws no error', function () {
      return shareFormSubmit.call(this);
    });
    it('notification appears', async function () {
      await waitForNotification.call(this);
    });
    it('notification message is correct', async function () {
      const message = await getNotificationMessage.call(this);
      await hideNotificationMessage.call(this);
      expect(message).equal(i18n.SHARE_FORM_SUBMIT_SUCCEED);
    });
    it('share drop zone appears', async function () {
      const isExists = await shareWaitForDropZoneExists.call(this);
      expect(isExists).equal(true);
    });
    it('discover feed has 1 album', async function () {
      await openDiscoverPage.call(this);
      await discoverWaitForFeedExists.call(this);
      return discoverFeedLengthEquals.call(this, 1);
    });
    it('discover feed album title match', async function () {
      return discoverAlbumTitleEquals.call(this, 1, ALBUM_TITLE);
    });
    it('discover feed album artist match', async function () {
      return discoverAlbumArtistEquals.call(this, 1, ALBUM_ARTIST);
    });
    after(async function () {
      await openSharePage.call(this);
    });
  });
  describe('...twice', () => {
    before(addAlbum);
    it('throws no error', function () {
      return shareFormSubmit.call(this);
    });
    it('notification appears', async function () {
      await waitForNotification.call(this);
    });
    it('notification message is correct', async function () {
      const message = await getNotificationMessage.call(this);
      await hideNotificationMessage.call(this);
      expect(message).equal(i18n.SHARE_ALBUM_ALREADY_EXISTS);
    });
    it('share form remains', async function () {
      await shareWaitForFormExists.call(this);
    });
    it('discover feed still has 1 album', async function () {
      await openDiscoverPage.call(this);
      await discoverWaitForFeedExists.call(this);
      return discoverFeedLengthEquals.call(this, 1);
    });
  });
});
