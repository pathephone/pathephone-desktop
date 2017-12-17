/* eslint-env mocha */
import utils from '../utils'

describe('add album process', function () {
  this.timeout(30000)
  before(utils.beforeEach)
  after(utils.afterEach)
  describe('click add album button', () => {
    it('should throw no errors', async function () {
      const { app } = this
      await app.client.waitForExist('#add-album_button')
      return app.client.click('#add-album_button')
    })
    it('form should appear', function () {
      const { app } = this
      return app.client.waitForExist('#add-album_form')
    })
  })
})
