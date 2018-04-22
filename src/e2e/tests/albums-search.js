/* eslint-env mocha */
import { expect } from 'chai'

const inputSelector = '#albums-search'
const buttonSelector = '#cancel-search'

describe('albums search', function () {
  // ALBUM SELECTION

  describe('type some text', function () {
    it('check some album already on feed', async function () {
      const { app } = this
      const albums = await app.client.$$('#albums-feed .album')
      expect(albums.length).to.be.above(0)
    })
    it('throws no errors', async function () {
      const { app } = this
      await app.client.waitForExist(inputSelector)
      await app.client.$(inputSelector).setValue('some value')
    })
    it('no albums on the feed', async function () {
      const { app } = this
      await app.client.waitUntil(async () => {
        const albums = await app.client.$$('#albums-feed .album')
        return albums.length === 0
      })
    })
  })
  describe('click cancel search button', function () {
    it('throws no errors', async function () {
      const { app } = this
      await app.client.waitUntil(async () => {
        const button = await app.client.$(buttonSelector)
        return !!button
      })
      await app.client.$(buttonSelector).click()
    })
    it('input is empty', async function () {
      const { app } = this
      const value = await app.client.$(inputSelector).getValue()
      expect(value).to.equal('')
    })
    it('albums appear on the feed', async function () {
      const { app } = this
      await app.client.waitForExist('#albums-feed .album')
      const albums = await app.client.$$('#albums-feed .album')
      expect(albums.length).to.be.greaterThan(0)
    })
  })
  describe(`type artist's name (partialy)`, function () {
    const value = 'degi'
    it('some albums still on the feed', async function () {
      const { app } = this
      await app.client.waitForExist(inputSelector)
      await app.client.$(inputSelector).setValue(value)
      await app.client.waitForExist('#albums-feed .album')
      const albums = await app.client.$$('#albums-feed .album')
      expect(albums.length).to.be.greaterThan(0)
    })
    it(`album artist's name includes typed string`, async function () {
      const regExp = new RegExp(value, 'i')
      const artist = await this.app.client.$$('#albums-feed .album').getText('.album__artist')
      expect(artist).to.match(regExp)
    })
  })
  describe(`type album's title (partialy)`, function () {
    const value = 'esom'
    it('some albums still on the feed', async function () {
      const { app } = this
      await app.client.waitForExist(inputSelector)
      await app.client.$(inputSelector).setValue(value)
      await app.client.waitForExist('#albums-feed .album')
      const albums = await app.client.$$('#albums-feed .album')
      expect(albums.length).to.be.greaterThan(0)
    })
    it(`album's title includes typed string`, async function () {
      const regExp = new RegExp(value, 'i')
      const { app } = this
      const title = await app.client.$('#albums-feed .album__title').getText()
      expect(title).to.match(regExp)
    })
  })
})
