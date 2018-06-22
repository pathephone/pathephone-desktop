import { shareAlbum } from '~reusable/sharePage'

import { openSharePage, openDiscoverPage } from '~reusable/navigation'

import {
  E2E_DISCOVER_FEED_ID
} from '~data/e2eConstants'

import {
  discoverFeedLengthEquals,
  discoverAlbumTitleEquals,
  discoverSetSearchValue,
  discoverWaitForFeedExists
} from '~reusable/discoverPage'

import album1 from '~data/assets/album1'
import album2 from '~data/assets/album2'

describe('search tests', function () {
  // SEARCH

  before(async function () {
    await openSharePage.call(this)
    await shareAlbum.call(this, album1)
    await shareAlbum.call(this, album2)
    await openDiscoverPage.call(this)
    await this.app.client.waitForExist(E2E_DISCOVER_FEED_ID)
  })

  describe('type album1 title', () => {
    it('throws no error', function () {
      return discoverSetSearchValue.call(this, album1.title)
    })
    it('feed length must be 1', async function () {
      await discoverWaitForFeedExists.call(this)
      return discoverFeedLengthEquals.call(this, 1)
    })
    it('feed album title match', function () {
      return discoverAlbumTitleEquals.call(this, 1, album1.title)
    })
  })
  describe('type album1 artist', () => {
    it('throws no error', function () {
      return discoverSetSearchValue.call(this, album1.tracks[0].artist)
    })
    it('feed length must be 2', async function () {
      await discoverWaitForFeedExists.call(this)
      return discoverFeedLengthEquals.call(this, 2)
    })
  })
})
