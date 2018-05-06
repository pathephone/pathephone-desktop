import { call, put, take } from 'redux-saga/effects'

import startServices from './startApp/startServices'

import { systemAppStartSucceed, systemAppStartFailed } from '#actions-system'
import { uiAppClosed } from '#actions-ui'

function * startApp () {
  try {
    yield call(startServices)
    yield put(systemAppStartSucceed())
    yield take(uiAppClosed)
    // yield call (closeApp)
  } catch (e) {
    console.error(e)
    yield put(systemAppStartFailed(e.message))
  }
}

export default startApp
