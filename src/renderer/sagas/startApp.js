import { call, put } from 'redux-saga/effects'

import {
  systemAppStartSucceed,
  systemAppStartFailed
} from '~actions/system'

import { IS_TESTING } from '#config'

import startServices from './startApp/startServices'
import getApis from './startApp/getApis'
import checkLegalAgreement from './startApp/checkLegalAgreement'

function * startApp () {
  try {
    if (!IS_TESTING) {
      yield call(checkLegalAgreement)
    }
    const apis = yield call(getApis)
    yield call(startServices, apis)
    yield put(systemAppStartSucceed())
  } catch (e) {
    console.error(e)
    yield put(systemAppStartFailed(e.message))
  }
}

export default startApp
