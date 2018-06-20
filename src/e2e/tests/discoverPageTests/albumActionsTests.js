import {
  playlistWaitForTracklist,
  playlistTracklistLengthEquals,
  playlistWaitForTrackByOrder,
  playlistClear
} from '~reusable/playlist'
import {
  discoverAlbumPlay,
  discoverAlbumHover,
  discoverAlbumQueue,
  discoverAlbumActionsVisible
} from '~reusable/discoverPage'
import {
  playerWaitForActiveStatus
} from '~reusable/player'

describe('album actions tests', () => {
  it('buttons is hidden by default', async function () {
    const buttonsExist = await discoverAlbumActionsVisible.call(this, 1)
    expect(buttonsExist).equal(false)
  })
  it('buttons appear on hover', async function () {
    await discoverAlbumHover.call(this, 1)
    const buttonsExist = await discoverAlbumActionsVisible.call(this, 1)
    expect(buttonsExist).equal(true)
  })
  describe('click play album button', () => {
    it('throws no errors', function () {
      return discoverAlbumPlay.call(this, 1)
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
    it('throws no errors', function () {
      return discoverAlbumQueue.call(this, 1)
    })
    it('tracklist length equals 2', function () {
      return playlistWaitForTrackByOrder.call(this, 2)
    })
  })
  after(playlistClear)
})
