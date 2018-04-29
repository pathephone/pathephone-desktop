import { call, put, take } from 'redux-saga/effects'

import startServices from './startApp/startServices'

import {
  reportAppReady,
  reportAppError,
  initAppClose
} from '#actions'

function * startApp () {
  try {
    yield call(startServices)
    yield put(reportAppReady())
    yield take(initAppClose)
    // yield call (closeApp)
  } catch ({ message }) {
    yield put(reportAppError(message))
  }
}

export default startApp
