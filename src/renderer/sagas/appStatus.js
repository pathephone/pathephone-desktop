import { fork, put, take } from 'redux-saga/effects'

import startApp from '/appLifecycle/startApp'

import {
  initAppStart,
  reportAppStartSuccess,
  reportAppStartError,
  initAppClose,
  reportAppCloseSuccess
} from '#actions'

function * appStart () {
  yield take(initAppStart)
  try {
    yield fork(startApp)
    yield put(reportAppStartSuccess)
  } catch ({ message }) {
    yield put(reportAppStartError(message))
  }
  yield take(initAppClose)
  yield put(reportAppCloseSuccess())
}

export default appStart
