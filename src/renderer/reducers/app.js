
import { reducerFactory } from '~utils/reduxTools'

import { APP_STATUS_READY, APP_STATUS_START, APP_STATUS_CLOSE } from '~data/constants'
import { reportAppReady, reportAppError, initAppClose } from '#actions'

// DOMAIN

const DOMAIN = 'app'

// INITIAL STATE

const initialState = { statusCode: APP_STATUS_START, errorMessage: null }

// SELECTORS

export const getAppStatusCode = state => state[DOMAIN].statusCode
export const getAppErrorMessage = state => state[DOMAIN].errorMessage
export const isAppStarting = state => getAppStatusCode(state) === APP_STATUS_START
export const isAppReady = state => getAppStatusCode(state) === APP_STATUS_READY
export const isAppClosing = state => getAppStatusCode(state) === APP_STATUS_CLOSE

const actionHandlers = {
  [reportAppReady] () {
    return { statusCode: APP_STATUS_READY, errorMessage: null }
  },
  [reportAppError] ({ state, payload }) {
    return { ...state, errorMessage: payload }
  },
  [initAppClose] () {
    return { statusCode: APP_STATUS_CLOSE, errorMessage: null }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
