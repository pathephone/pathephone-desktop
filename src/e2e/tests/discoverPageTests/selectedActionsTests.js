import {
  E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID,
  E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID,
  E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID,
  E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID
} from '~data/e2eConstants'

import {
  playlistWaitForTracklist,
  playlistTracklistLengthEquals,
  playlistWaitForTrackByOrder
} from '~reusable/playlist'
import {
  discoverFeedAlbumClick
} from '~reusable/discoverPage'
import {
  playerWaitForActiveStatus
} from '~reusable/player'

describe('selected actions tests', () => {
  describe('click play album button', () => {
    before(function () {
      return discoverFeedAlbumClick.call(this, 1)
    })
    it('throws no errors', async function () {
      const { app } = this
      return app.client.click(E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID)
    })
    it('active audio player appears', function () {
      return playerWaitForActiveStatus.call(this)
    })
    it('playlist has some tracks', function () {
      return playlistWaitForTracklist.call(this)
    })
    it('tracklist length equals 1', function () {
      return playlistTracklistLengthEquals.call(this, 1)
    })
  })
  describe('click queue album button', () => {
    before(function () {
      return discoverFeedAlbumClick.call(this, 1)
    })
    it('throws no errors', function () {
      const { app } = this
      return app.client.click(E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID)
    })
    it('tracklist length equals 2', function () {
      return playlistWaitForTrackByOrder.call(this, 2)
    })
  })
  describe('click delete album button', () => {
    before(function () {
      return discoverFeedAlbumClick.call(this, 1)
    })
    it('throws no errors', function () {
      const { app } = this
      return app.client.click(E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID)
    })
    it('discover feed is empty', function () {
      return this.app.client
        .waitForExist(E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID)
    })
  })
})
