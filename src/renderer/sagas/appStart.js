import { call, put, take } from 'redux-saga/effects'

import startApp from '~utils/startApp'

import { initApp, reportInitAppSuccess, reportInitAppError } from '#actions'

function * appStart () {
  yield take(initApp)
  try {
    yield call(startApp)
    yield put(reportInitAppSuccess())
  } catch ({ message }) {
    yield put(reportInitAppError(message))
  }
}

export default appStart
