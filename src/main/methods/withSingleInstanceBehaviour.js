import { app } from 'electron'

const withSingleInstanceBehaviour = state => {
  const isSecondInstance = app.makeSingleInstance(() => {
  // Someone tried to run a second instance, we should focus our window.
    const { mainWindow } = state
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore()
      }
      mainWindow.focus()
    }
  })

  if (isSecondInstance) {
    console.log('-- second instance detected, exit')
    app.exit()
  }
}

export default withSingleInstanceBehaviour
