import createElectronWindow from '~utils/createElectronWindow'

import withTray from './createMainWindow/withTray'
import withNoNavigation from './createMainWindow/withNoNavigation'
import withMenu from './createMainWindow/withMenu'

const MAIN_WINDOW_NAME = 'main'

const createMainWindow = () => {
  const window = createElectronWindow(MAIN_WINDOW_NAME)

  withTray(window)

  withNoNavigation(window)

  withMenu(window)

  return window
}

export default createMainWindow
