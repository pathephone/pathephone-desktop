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

  it('ipfs is started', function (done) {
    const { app } = this
    const { ipcRenderer, remote } = app.electron
    app.client.waitUntilWindowLoaded()
      .then(() => {
        if (remote.getGlobal('ipfsLoaded')) {
          done()
        } else {
          ipcRenderer.on('ipfs-ready', (event, message) => {
            done()
          })
        }
      })
  })

  it('ipfs daemon is started', function (done) {
    const { app } = this
    app.client.waitUntilWindowLoaded()
      .then(() => {
        app
          .electron
          .remote
          .getGlobal('ipfsDaemon')(({ ready }) => {
            console.log(ready)
            if (ready === null) return
            if (ready) done()
          })
      })
  })

  it('app component is mounted', async function () {
    const { app } = this
    await app.client.waitUntilWindowLoaded()
    await app.remote.getGlobal()
    await utils.asyncTimeout(20000)
    const exists = await app.client.isExisting('#app')
    expect(exists).to.be.true
  })
})
