/* eslint-env mocha */
const utils = require('../utils')

describe('application launch', function () {
  this.timeout(30000)
  before(utils.beforeEach)
  after(utils.afterEach)
  it('root component is mounted', async function () {
    const { app } = this
    await app.client.waitForExist('#root')
  })

  it('app component is mounted', async function () {
    const { app } = this
    await app.client.waitForExist('#app')
  })
})
