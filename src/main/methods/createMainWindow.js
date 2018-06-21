import createElectronWindow from '~utils/createElectronWindow'

import withTray from './createMainWindow/withTray'
import withNoNavigation from './createMainWindow/withNoNavigation'
import withMenu from './createMainWindow/withMenu'
import { HAS_TRAY } from '#config'

const MAIN_WINDOW_NAME = 'main'

const createMainWindow = () => {
  const window = createElectronWindow(MAIN_WINDOW_NAME)

  if (HAS_TRAY) {
    console.log('-- tray support enabled')
    withTray(window)
  }

  withNoNavigation(window)

  withMenu(window)

  return window
}

export default createMainWindow
