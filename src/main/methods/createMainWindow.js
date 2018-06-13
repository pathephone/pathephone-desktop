import createElectronWindow from '~utils/createElectronWindow'

import withSingleInstanceBehavior from './createMainWindow/withSingleInstanceBehavior'
import withTray from './createMainWindow/withTray'
import withNoNavigation from './createMainWindow/withNoNavigation'
import withMenu from './createMainWindow/withMenu'

const MAIN_WINDOW_NAME = 'main'

const createMainWindow = () => {
  const window = createElectronWindow(MAIN_WINDOW_NAME)

  withSingleInstanceBehavior(window)

  withTray(window)

  withNoNavigation(window)

  withMenu(window)

  return window
}

export default createMainWindow
