import { delay } from 'redux-saga'
import { takeEvery, all, put } from 'redux-saga/effects'

import { systemNotificationRecieved, systemNotificationExpired } from '~actions/system'
import {
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_SUCCESS
} from '~data/constants'

import isObject from '~utils/isObject'

let counter = 0

function * handleAction ({ payload }) {
  if (payload && isObject(payload)) {
    const { errorMessage, warningMessage, successMessage } = payload
    let nextPayload
    if (errorMessage) {
      nextPayload = {
        text: errorMessage,
        type: NOTIFICATION_TYPE_ERROR
      }
    }
    if (warningMessage) {
      nextPayload = {
        text: warningMessage,
        type: NOTIFICATION_TYPE_WARNING
      }
    }
    if (successMessage) {
      nextPayload = {
        text: successMessage,
        type: NOTIFICATION_TYPE_SUCCESS
      }
    }
    if (nextPayload) {
      let id = counter++
      nextPayload.id = id
      yield put(systemNotificationRecieved(nextPayload))
      yield delay(3000)
      yield put(systemNotificationExpired(id))
    }
  }
}

function * startNotificationsService () {
  yield all([
    takeEvery('*', handleAction)
  ])
}

export default startNotificationsService
