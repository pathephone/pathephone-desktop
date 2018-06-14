const { resourcesPath, type } = process

const ENV_DEVELOPMENT = 'development'
const ENV_PRODUCTION = 'production'
const ENV_TESTING = 'testing'

export const ENVIRONMENT = process.env.NODE_ENV || ENV_PRODUCTION

export const IS_PRODUCTION = ENVIRONMENT === ENV_PRODUCTION
export const IS_DEVELOPMENT = ENVIRONMENT === ENV_DEVELOPMENT
export const IS_TESTING = ENVIRONMENT === ENV_TESTING

export const IS_OFFLINE = process.env.OFFLINE === 'true'

export const RESOURCES_PATH = (IS_PRODUCTION || IS_TESTING) ? resourcesPath : 'resources'

export const IS_RENDERER = process && type === 'renderer'
