const startMainWindowLifecycle = ({ mainWindow }) => {
  mainWindow.on('close', e => {
    if (!process.platform === 'linux') {
      mainWindow.hide()
      e.preventDefault()
    }
  })
}

export default startMainWindowLifecycle
