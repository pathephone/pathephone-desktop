const electron = require('electron')
const { Application } = require('spectron')

const beforeEach = function () {
  this.app = new Application({
    path: electron,
    args: ['.']
  })
  return this.app.start()
}

const afterEach = function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop()
  }
}

module.exports = {
  beforeEach,
  afterEach
}
