import electron from 'electron'
import { Application } from 'spectron'

const asyncTimeout = ms => new Promise(resolve => setTimeout(resolve, ms))

const beforeEach = function () {
  this.app = new Application({
    path: electron,
    args: ['.']
  })
  return this.app.start()
}

const afterEach = async function () {
  if (this.app && this.app.isRunning()) {
    await this.app.stop()
    await asyncTimeout(10000)
  }
}

export default {
  beforeEach,
  afterEach,
  asyncTimeout
}
