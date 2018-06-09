import { ENVIRONMENT } from '#config'
import { ENV_DEVELOPMENT } from '~data/constants'

const withMenu = window => {
  if (ENVIRONMENT !== ENV_DEVELOPMENT) {
    window.setMenu(null)
  }
}

export default withMenu
