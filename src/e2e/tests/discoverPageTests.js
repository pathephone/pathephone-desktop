import { shareAlbum } from '~reusable/sharePage'

import { openSharePage, openDiscoverPage } from '~reusable/navigation'

import {
  E2E_DISCOVER_FEED_ID
} from '~data/e2eConstants'

import album1 from '~data/assets/album2'
import { startApp, closeApp } from '~reusable/app'

describe('DISCOVER PAGE TESTS', function () {
  // ALBUM SELECTION

  before(async function () {
    await startApp.call(this)
    await openSharePage.call(this)
    await shareAlbum.call(this, album1)
    await openDiscoverPage.call(this)
    await this.app.client.waitForExist(E2E_DISCOVER_FEED_ID)
  })

  require('./discoverPageTests/albumActionsTests')
  require('./discoverPageTests/selectAlbumTests')
  require('./discoverPageTests/selectedActionsTests')
  require('./discoverPageTests/searchTests.js')
  require('./discoverPageTests/paginationTests.js')

  after(closeApp)
})
