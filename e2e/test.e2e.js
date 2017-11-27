/* eslint-env mocha */
import { expect } from 'chai'
import utils from './utils'

describe('application launch', function () {
  this.timeout(60000)
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)
  it('root component is mounted', async function () {
    const { app } = this
    await app.client.waitUntilWindowLoaded()
    const exists = await app.client.isExisting('#root')
    expect(exists).to.be.true
  })

  it('app component is mounted', function (done) {
    const { app } = this
    const check = async () => {
      const exists = await app.client.isExisting('#app')
      if (exists) {
        done()
      } else {
        await utils.asyncTimeout(1000)
        check()
      }
    }
    app.client.waitUntilWindowLoaded()
      .then(check)
  })
})
