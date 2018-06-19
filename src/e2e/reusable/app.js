import { Application } from 'spectron'
import { E2E_READY_SCREEN_ID } from '~data/e2eConstants'

const { platform } = process

let pathToBin

if (platform === 'darwin') {
  pathToBin = '../../dist/mac/Pathephone.app/Contents/MacOS/Pathephone'
} else
if (platform === 'linux') {
  pathToBin = '../../dist/linux-unpacked/pathephone-desktop'
} else
if (platform === 'win32') {
  pathToBin = '../../dist/win-unpacked/Pathephone.exe'
}

export const startApp = async function () {
  this.timeout(30000)
  this.app = new Application({
    path: pathToBin,
    args: ['.'],
    waitTimeout: 30000
  })
  await this.app.start()
  return this.app.client.waitForExist(E2E_READY_SCREEN_ID)
}

export const closeApp = function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop()
  }
}
