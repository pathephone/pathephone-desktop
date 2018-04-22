import { call, put, take } from 'redux-saga/effects'

import startApp from '/appLifecycle/startApp'

import {
  initApp,
  reportInitAppSuccess,
  reportInitAppError,
  closeApp,
  reportCloseAppSuccess
} from '#actions'

function * appStart () {
  yield take(initApp)
  try {
    yield call(startApp)
    yield put(reportInitAppSuccess())
  } catch ({ message }) {
    yield put(reportInitAppError(message))
  }
  yield take(closeApp)
  yield put(reportCloseAppSuccess())
}

export default appStart
