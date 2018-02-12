const { Application } = require('spectron')

const { platform } = process

let pathToBin

if (platform === 'darwin') {
  pathToBin = 'dist/mac/Pathephone.app/Contents/MacOS/Pathephone'
} else
if (platform === 'linux') {
  pathToBin = 'dist/linux-unpacked/pathephone-desktop'
} else
if (platform === 'win32') {
  pathToBin = 'dist/win-unpacked/Pathephone.exe'
}

const beforeEach = function () {
  this.timeout(10000)
  this.app = new Application({
    path: pathToBin,
    args: ['.'],
    startTimeout: 10000,
    waitTimeout: 10000
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
