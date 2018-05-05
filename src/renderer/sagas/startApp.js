import { call, put, take } from 'redux-saga/effects'

import startServices from './startApp/startServices'

import {
  appStartSucceed,
  appStartFailed,
  appCloseInited
} from '#actions'

function * startApp () {
  try {
    yield call(startServices)
    yield put(appStartSucceed())
    yield take(appCloseInited)
    // yield call (closeApp)
  } catch (e) {
    console.error(e)
    yield put(appStartFailed(e.message))
  }
}

export default startApp
