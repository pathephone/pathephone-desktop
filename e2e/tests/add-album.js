/* eslint-env mocha */
const utils = require('../utils')
const path = require('path')

describe('add album process', function () {
  this.timeout(30000)
  before(utils.beforeEach)
  after(utils.afterEach)
  describe('click add album button', () => {
    it('should throw no errors', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_open')
      return app.client.click('#add-album_open')
    })
    it('add album form should appear', function () {
      const { app } = this
      return app.client.waitForExist('#add-album_form')
    })
  })
  describe('click add album submit button', () => {
    it('should throw no errors', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_submit')
      return app.client.click('#add-album_submit')
    })
    it('errors fieldset should appear', function () {
      const { app } = this
      return app.client.waitForExist('#add-album_errors')
    })
  })
  describe('add tracks manually', () => {
    it('should throw no errors', async function () {
      const { app } = this
      const testFilePath = path.join(__dirname, 'add-album/test-track.mp3')
      return app.client.chooseFile('#add-album_add-tracks', testFilePath)
    })
    it('should fill album.title data', async function () {
      const { app } = this
      const value = await app.client.getValue('#input_album-title]')
      console.log(value)
      if (value !== 'Red Flower') {
        throw new Error('Value does not match.')
      }
    })
    it('fieldset should appear', function () {
      // const { app } = this
      // return app.client.waitForExist('#add-album_errors')
    })
  })
})
