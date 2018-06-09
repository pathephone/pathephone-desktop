import { app } from 'electron'

const withSingleInstanceBehavior = (mainWindow) => {
  const isSecondInstance = app.makeSingleInstance(() => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore()
      }
      mainWindow.focus()
    }
  })

  if (isSecondInstance) {
    app.quit()
  }
}

export default withSingleInstanceBehavior
