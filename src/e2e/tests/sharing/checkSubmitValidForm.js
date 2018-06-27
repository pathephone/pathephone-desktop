import album1 from '~data/assets/album1'
import { MESSAGE_SHARE_FORM_SUBMIT_SUCCEED } from '~data/textMessages'

import {
  shareDropZoneExists,
  shareDropZoneSelect,
  shareFormSelectCover,
  shareFormSubmit,
  shareFormSetAlbumArtist,
  shareFormSetAlbumTitle
} from '~reusable/sharePage'
import {
  getNotificationMessage, waitForNotification
} from '~reusable/notifications'
import {
  openDiscoverPage,
  discoverWaitForFeedExists,
  discoverFeedLengthEquals,
  discoverAlbumTitleEquals,
  discoverAlbumArtistEquals,
  discoverFeedAlbumClick,
  discoverPageDeleteSelected
} from '~reusable/discoverPage'
import { openSharePage } from '~reusable/navigation'

const ALBUM_ARTIST = 'custom artist'
const ALBUM_TITLE = 'custom title'

describe('check submit valid form...', () => {
  describe('...without changes', () => {
    before(async function () {
      await shareDropZoneSelect.call(this, album1.tracks[0].file)
      await shareFormSelectCover.call(this, album1.cover)
    })
    it('throws no error', function () {
      return shareFormSubmit.call(this)
    })
    it('correct notification message appears', async function () {
      await waitForNotification.call(this)
      const message = await getNotificationMessage.call(this)
      expect(message).equal(MESSAGE_SHARE_FORM_SUBMIT_SUCCEED)
    })
    it('share drop zone appears', async function () {
      const isExists = await shareDropZoneExists.call(this)
      expect(isExists).equal(true)
    })
    it('discover feed has 1 album', async function () {
      await openDiscoverPage.call(this)
      await discoverWaitForFeedExists.call(this)
      return discoverFeedLengthEquals.call(this, 1)
    })
    it('discover feed album title match', async function () {
      return discoverAlbumTitleEquals.call(this, 1, album1.title)
    })
    it('discover feed album artist match', async function () {
      return discoverAlbumArtistEquals.call(this, 1, album1.autoArtist)
    })
    after(async function () {
      await discoverFeedAlbumClick.call(this, 1)
      await discoverPageDeleteSelected.call(this)
      await openSharePage.call(this)
    })
  })
  describe('...with changes', () => {
    before(async function () {
      await shareDropZoneSelect.call(this, album1.tracks[0].file)
      await shareFormSelectCover.call(this, album1.cover)
      await shareFormSetAlbumArtist.call(this, ALBUM_ARTIST)
      await shareFormSetAlbumTitle.call(this, ALBUM_TITLE)
    })
    it('throws no error', function () {
      return shareFormSubmit.call(this)
    })
    it('correct notification message appears', async function () {
      await waitForNotification.call(this)
      const message = await getNotificationMessage.call(this)
      expect(message).equal(MESSAGE_SHARE_FORM_SUBMIT_SUCCEED)
    })
    it('share drop zone appears', async function () {
      const isExists = await shareDropZoneExists.call(this)
      expect(isExists).equal(true)
    })
    it('discover feed has 1 album', async function () {
      await openDiscoverPage.call(this)
      await discoverWaitForFeedExists.call(this)
      return discoverFeedLengthEquals.call(this, 1)
    })
    it('discover feed album title match', async function () {
      return discoverAlbumTitleEquals.call(this, 1, ALBUM_TITLE)
    })
    it('discover feed album artist match', async function () {
      return discoverAlbumArtistEquals.call(this, 1, ALBUM_ARTIST)
    })
  })
})
