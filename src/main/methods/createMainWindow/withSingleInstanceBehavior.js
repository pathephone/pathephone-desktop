import { app } from 'electron'

const withSingleInstanceBehavior = (window) => {
  app.makeSingleInstance(() => {
    // Someone tried to run a second instance, we should focus our window.
    if (window.isMinimized()) {
      window.restore()
    }
    window.focus()
  })
}

export default withSingleInstanceBehavior
