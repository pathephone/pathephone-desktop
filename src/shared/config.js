const { resourcesPath, type } = process

const ENVIRONMENT = process.env.NODE_ENV

let IS_DEVELOPMENT = false
let IS_PRODUCTION = false
let IS_TESTING = false

switch (ENVIRONMENT) {
  case 'development':
    IS_DEVELOPMENT = true
    break
  case 'testing':
    IS_TESTING = true
    break
  case 'production':
    IS_PRODUCTION = true
    break
  default:
    throw new Error('No valid environment detected.')
}

export { ENVIRONMENT, IS_DEVELOPMENT, IS_TESTING, IS_PRODUCTION }

export const IS_OFFLINE = process.env.OFFLINE === 'true'

export const RESOURCES_PATH = (IS_PRODUCTION || IS_TESTING) ? resourcesPath : 'resources'

export const IS_RENDERER = process && type === 'renderer'

export const IS_WINDOWS = process.platform === 'win32'
export const IS_MAC = process.platform === 'darwin'
export const IS_LINUX = process.platform === 'linux'

let HAS_TRAY
if (!IS_LINUX || process.env.XDG_CURRENT_DESKTOP === 'Unity') {
  HAS_TRAY = true
} else {
  HAS_TRAY = false
}

export { HAS_TRAY }
