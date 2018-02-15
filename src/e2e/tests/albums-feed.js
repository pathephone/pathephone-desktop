/* eslint-env mocha */
const utils = require('../utils')

describe('albums feed', function () {
  this.timeout(30000)

  before(utils.beforeEach)
  after(utils.afterEach)

  // ALBUM SELECTION

  describe('click album', () => {
    it('throws no errors', async function () {
      const { app } = this
      await app.client.waitForExist('#albums-feed')
      const feed = app.client.$('#albums-feed')
      const album = feed.$('.album')
      return album.$('.album__cover').click()
    })
    it('album now has selected class', function () {
      const { app } = this
      return app.client.waitForExist('.album--selected')
    })
    it('selected actions bar appears', function () {
      const { app } = this
      return app.client.waitForExist('.selected-actions')
    })
  })
  describe('selected actions bar', function () {
    it('displays selected albums count', async function () {
      const { app } = this
      await app.client.waitForExist('.selected-actions__count')
      return app.client.getText('.selected-actions__count') === '1 album selected'
    })
    it('has play selected button', function () {
      const { app } = this
      return app.client.waitForExist('.selected-actions__play')
    })
    it('has add selected to playlist button', function () {
      const { app } = this
      return app.client.waitForExist('.selected-actions__add')
    })
    it('has delete selected button', function () {
      const { app } = this
      return app.client.waitForExist('.selected-actions__delete')
    })
  })
  describe('delete album', () => {
    it('button click throws no errors', async function () {
      const { app } = this
      await app.client.waitForExist('.selected-actions__delete')
      return app.client.$('.selected-actions__delete').click()
    })
    it('album disappeares from albums feed', async function () {
      const { app } = this
      await app.client.waitUntil(async () => {
        const exists = await app.client.isExisting('.album--selected')
        return !exists
      })
    })
  })
})
