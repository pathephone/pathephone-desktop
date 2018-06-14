import { IS_DEVELOPMENT } from '#config'

const withMenu = window => {
  if (!IS_DEVELOPMENT) {
    window.setMenu(null)
  }
}

export default withMenu
