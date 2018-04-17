
import { reducerFactory } from '../utils/reduxTools'

import { APP_STATUS_READY, APP_STATUS_START, APP_STATUS_ERROR, APP_STATUS_CLOSE } from '../constants/appStatuses'

import { reportInitAppSuccess, reportInitAppError, closeApp } from '../actions'

// DOMAIN

const DOMAIN = 'app'

// INITIAL STATE

const initialState = { statusCode: APP_STATUS_START, errorMessage: null }

// SELECTORS

export const getAppStatusCode = state => state[DOMAIN].statusCode
export const getAppErrorMessage = state => state[DOMAIN].errorMessage

const actionHandlers = {
  [reportInitAppSuccess] () {
    return { statusCode: APP_STATUS_READY, errorMessage: null }
  },
  [reportInitAppError] ({ state, payload }) {
    return { statusCode: APP_STATUS_ERROR, errorMessage: payload }
  },
  [closeApp] () {
    return { statusCode: APP_STATUS_CLOSE, errorMessage: null }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
