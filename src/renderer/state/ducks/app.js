
import { APP_STATUS_READY, APP_STATUS_START, APP_STATUS_CLOSE } from '~data/constants'

export const nameSpace = 'appStatus'

export const basicSelectors = {
  getAppStatusCode: state => state[nameSpace].statusCode,
  getAppStatusErrorMessage: state => state[nameSpace].errorMessage,
  getAppStatusProgress: state => state[nameSpace].progress
}

export const actionHandlers = {
  reportAppReady () {
    return { statusCode: APP_STATUS_READY, errorMessage: null }
  },
  reportAppError ({ state, payload }) {
    return { ...state, errorMessage: payload }
  },
  reportAppProgress ({ state, payload }) {
    return { ...state, progress: payload }
  },
  initAppClose () {
    return { statusCode: APP_STATUS_CLOSE, errorMessage: null }
  }
}

export default {
  code: APP_STATUS_START,
  progress: 0,
  errorMessage: null
}
