
const withNoNavigation = window => {
  window.webContents.on('will-navigate', e => {
    e.preventDefault()
  })
}

export default withNoNavigation
