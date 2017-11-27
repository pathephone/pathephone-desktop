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
    console.log('APP IS RUNNING')
    await this.app.stop()
  }
  console.log('APP IS NOT RUNNING')
}

export default {
  beforeEach,
  afterEach,
  asyncTimeout
}
