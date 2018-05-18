import { call, put } from 'redux-saga/effects'

import { systemAppStartSucceed, systemAppStartFailed } from '#actions-system'

import startServices from './startApp/startServices'
import getApis from './startApp/getApis'

function * startApp () {
  try {
    const apis = yield call(getApis)
    const nextArgs = { ...apis }
    yield call(startServices, nextArgs)
    yield put(systemAppStartSucceed())
  } catch (e) {
    console.error(e)
    yield put(systemAppStartFailed(e.message))
  }
}

export default startApp
