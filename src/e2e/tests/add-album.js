/* eslint-env mocha */
import { expect } from 'chai'
import path from 'path'
import isIpfs from 'is-ipfs'
import flac from '~root/resources/music/track.flac'
import cover from '~root/resources/music/cover.jpg'

let feedLength

describe('add album process', function () {
  // OPEN AND CLOSE ADD ALBUM MODAL
  describe('click openadd album button', () => {
    it('throws no errors', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_open')
      return app.client.click('#add-album_open')
    })
    it('form appears', function () {
      const { app } = this
      return app.client.waitForExist('#add-album_form')
    })
    it('submit button appears', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_submit')
    })
    it('close button appears', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_submit')
    })
  })
  describe('click close add album button', () => {
    it('throws no errors', async function () {
      return this.app.client.click('#add-album_close')
    })
    it('form disappeares', function () {
      const { app } = this
      return !app.client.isExisting('#add-album_form')
    })
  })

  // SUBMIT INVALID DATA

  describe('submit raw form data', () => {
    it('errors fieldset appears', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_open')
      await app.client.click('#add-album_open')
      await app.client.click('#add-album_submit')
      return app.client.waitForExist('#add-album_errors')
    })
  })

  // ADD TRACK
  describe('add track manually', () => {
    it('throws no errors', function () {
      const { app } = this
      const testFilePath = path.join(__dirname, flac)
      return app.client.chooseFile('#input_add-tracks', testFilePath)
    })
    it('autofills album.title data', async function () {
      const selector = 'input[name="album.title"]'
      const { app } = this
      await app.client.waitForValue(selector)
      const value = await app.client
        .$(selector)
        .getValue()
      if (value !== 'Red Flower') {
        throw new Error('Value does not match.')
      }
    })
    it('autofills album.artist data', async function () {
      const selector = 'input[name="album.artist"]'
      const { app } = this
      await app.client.waitForValue(selector)
      const value = await app.client
        .$(selector)
        .getValue()
      if (value !== 'DEgITx') {
        throw new Error('Value does not match.')
      }
    })
    it('fills album.tracks[0].artist data', async function () {
      const selector = 'input[name="album.tracks[0].artist"]'
      const { app } = this
      await app.client.waitForValue(selector)
      const value = await app.client
        .$(selector)
        .getValue()
      if (value !== 'DEgITx') {
        throw new Error('Value does not match.')
      }
    })
    it('fills album.tracks[0].title data', async function () {
      const selector = 'input[name="album.tracks[0].title"]'
      const { app } = this
      await app.client.waitForValue(selector)
      const value = await app.client
        .$(selector)
        .getValue()
      if (value !== 'City Under Sky (Intro)') {
        throw new Error('Value does not match.')
      }
    })
    it('fills album.tracks[0].hash data', async function () {
      const selector = 'input[name="album.tracks[0].hash"]'
      const { app } = this
      const value = await app.client
        .$(selector)
        .getValue()
      if (!isIpfs.cid(value)) {
        throw new Error('Received value is not an IPFS CID value.')
      }
    })
    it('can edit song title after add', async function () {
      const nextValue = 'Awesome song'
      const selector = 'input[name="album.tracks[0].title"]'
      const { app } = this
      await app.client.$(selector).setValue(nextValue)
      const value = await app.client.$(selector).getValue()
      expect(value).to.be.equal(nextValue)
    })
    it('can edit album title', async function () {
      const nextValue = 'Awesome album'
      const selector = 'input[name="album.title"]'
      const { app } = this
      await app.client.$(selector).setValue(nextValue)
      const value = await app.client.$(selector).getValue()
      expect(value).to.be.equal(nextValue)
    })
  })

  // ADD COVER

  describe('add cover manually', () => {
    it('throws no errors', function () {
      const { app } = this
      const testFilePath = path.join(__dirname, cover)
      return app.client.chooseFile('#input_add-cover', testFilePath)
    })
    it('fills album.cover data', async function () {
      const selector = 'input[name="album.cover"]'
      const { app } = this
      await app.client.waitForValue(selector)
      const value = await app.client
        .$(selector)
        .getValue()
      if (!isIpfs.cid(value)) {
        throw new Error('Received value is not an IPFS CID value.')
      }
    })
    it('image apears in form', async function () {
      const selector = '.ipfs-image-container'
      const { app } = this
      await app.client.waitForValue(selector)
    })
  })

  // SUBMIT VALID DATA

  describe('submit valid form data', () => {
    it('save number of albums on the feed', async function () {
      const { app } = this
      const albums = await app.client.$$('#albums-feed .album__title')
      feedLength = albums.length
    })
    it('form disappears', async function () {
      const { app } = this
      await app.client.click('#add-album_submit')
      return app.client.waitUntil(async () => {
        const exists = await app.client.isExisting('#add-album_form')
        return !exists
      })
    })
    it('new number of albums on the feed should be greater than previous', async function () {
      const { app } = this
      await app.client.waitUntil(async () => {
        const albums = await app.client.$$('#albums-feed .album__title')
        return feedLength < albums.length
      })
    })
    /* TODO: refactor when https://github.com/electron/spectron/issues/271 will be resolved
    describe('album appears in albums feed', function () {
      it('title match', async function () {
        const { app } = this
        await app.client.waitForExist('#albums-feed .album__title')
        const title = await app.client.$$('.album__title')
        const titles = title.map((el) => {
          console.log(el)
        })
        console.log(titles)
        expect(title).to.be.equal('Awesome album')
      })
      it('artist match', async function () {
        const { app } = this
        await app.client.waitForExist('#albums-feed .album')
        const artist = await app.client.$('.album__artist').getText()
        expect(artist).to.be.equal('DEgITx')
      })
    })
    */
  })
})
