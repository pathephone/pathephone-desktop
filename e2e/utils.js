import electron from 'electron'
import { Application } from 'spectron'

const beforeEach = function (done) {
  this.app = new Application({
    path: electron,
    args: ['.']
  })
  this.app.start()
    then(done)
}

const afterEach = function (done) {
  if (this.app && this.app.isRunning()) {
    this.app.stop()
      then(done)
  } else {
    done()
  }
}

const asyncTimeout = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  beforeEach,
  afterEach,
  asyncTimeout
}
