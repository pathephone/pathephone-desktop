const { Application } = require('spectron')

const { platform } = process

let pathToBin

if (platform === 'darwin') {
  pathToBin = 'dist/mac/pathephone-desktop'
} else
if (platform === 'linux') {
  pathToBin = 'dist/linux-unpacked/pathephone-desktop'
} else
if (platform === 'win32') {
  pathToBin = 'dist/win-unpacked/pathephone-desktop'
}

const beforeEach = function () {
  this.app = new Application({
    path: pathToBin,
    args: ['.']
  })
  return this.app.start()
}

const afterEach = function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop()
  }
}

const asyncTimeout = delay => new Promise(resolve => setTimeout(resolve, delay))

module.exports = {
  beforeEach,
  afterEach,
  asyncTimeout
}
