/* eslint-env mocha */
import { expect } from 'chai'
import utils from './utils'

describe('application launch', function () {
  this.timeout(30000)
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)
  it('root component is mounted', async function () {
    const { app } = this
    await app.client.waitUntilWindowLoaded()
    const exists = await app.client.isExisting('#root')
    expect(exists).to.be.true
  })

  it('app component is mounted', async function () {
    const { app } = this
    await app.client.waitUntilWindowLoaded()
    await utils.asyncTimeout(20000)
    const exists = await app.client.isExisting('#app')
    expect(exists).to.be.true
  })
})
