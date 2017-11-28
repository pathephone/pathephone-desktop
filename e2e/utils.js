import electron from 'electron'
import { Application } from 'spectron'

const beforeEach = function () {
  this.app = new Application({
    path: electron,
    args: ['.']
  })
  return this.app.start()
}

const afterEach = function () {
  if (this.app && this.app.isRunning()) {
    console.log('afterEach: STOPPING RUNNING APP')
    return this.app.stop()
  } else {
    console.log('afterEach: APP ALREADY STOPED')
  }
}

export default {
  beforeEach,
  afterEach
}
