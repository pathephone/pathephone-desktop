import { call, put, take } from 'redux-saga/effects'

import startApp from '~/utils/startApp'

import { APP_START_REQUESTED, APP_START_FAILED, APP_START_SUCCEEDED } from '../actionTypes'

function * appStart () {
  yield take(APP_START_REQUESTED)
  try {
    yield call(startApp)
    yield put({ type: APP_START_SUCCEEDED })
  } catch ({ message }) {
    yield put({ type: APP_START_FAILED, payload: message })
  }
}

export default appStart
