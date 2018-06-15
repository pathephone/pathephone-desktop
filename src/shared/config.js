const { resourcesPath, type } = process

const ENVIRONMENT = process.env.NODE_ENV

let IS_DEVELOPMENT, IS_PRODUCTION, IS_TESTING

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
