/* eslint-env mocha */
const utils = require('../utils')
const path = require('path')
const isIpfs = require('is-ipfs')

describe('add album process', function () {
  this.timeout(30000)

  before(utils.beforeEach)
  after(utils.afterEach)

  // OPEN AND CLOSE ADD ALBUM MODAL

  describe('click open add album button', () => {
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
      const testFilePath = path.join(__dirname, '../../resources/music/track1.flac')
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
      const selector = 'input[name="album.tracks[0].title"]'
      const { app } = this
      await app.client.$(selector).setValue('DEgITx Awesome song')
      if (await app.client.$(selector).getValue() !== 'DEgITx Awesome song') {
        throw new Error('Cant edit track title')
      }
    })
    it('can edit album title', async function () {
      const selector = 'input[name="album.title"]'
      const { app } = this
      await app.client.$(selector).setValue('DEgITx album')
      if (await app.client.$(selector).getValue() !== 'DEgITx album') {
        throw new Error('Cant edit album title')
      }
    })
  })

  // ADD COVER

  describe('add cover manually', () => {
    it('throws no errors', function () {
      const { app } = this
      const testFilePath = path.join(__dirname, '../../resources/music/cover.jpg')
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

  // SUBMIT VALID

  describe('submit valid form data', () => {
    it('form disappears', async function () {
      const { app } = this
      await app.client.click('#add-album_submit')
      return app.client.waitUntil(async () => {
        const exists = await app.client.isExisting('#add-album_form')
        return !exists
      })
    })
    it('album appears in albums feed', async function () {
      const selectors = ['.album__title', '.album__artist']
      const { app } = this
      await app.client.waitForExist(selectors[0])
      const [ title, artist ] = await Promise.all(
        selectors.map(selector => app.client.$(selector).getText())
      )
      if (title !== 'DEgITx album' || artist !== 'DEgITx') {
        throw new Error('Published album does not appear.')
      }
    })
  })
})
