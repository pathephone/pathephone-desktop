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

const startApp = async function () {
  this.timeout(30000)
  this.app = new Application({
    path: pathToBin,
    args: ['.'],
    waitTimeout: 30000
  })
  await this.app.start()
  const waitForExist = this.app.client.waitForExist
  this.app.client.waitForExist = (selector) => {
    return waitForExist.call(this.app.client, selector, 5000)
  }
  return this.app.client.waitForExist('#app')
}

const closeApp = function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop()
  }
}

const asyncTimeout = delay => new Promise(resolve => setTimeout(resolve, delay))

module.exports = {
  startApp,
  closeApp,
  asyncTimeout
}
