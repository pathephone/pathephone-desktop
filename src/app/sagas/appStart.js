import { call, put, take } from 'redux-saga/effects'

import initDb from '~/utils/initDb'
import openGates from '~/utils/openGates'
import initIpfsDaemon from '~/utils/initIpfsDaemon'

import { START_APP, APP_START_FAILED, APP_START_SUCCEEDED } from '../actionTypes'

function * appStart () {
  yield take(START_APP)
  try {
    yield call(initIpfsDaemon)
    yield call(initDb)
    yield call(openGates)
    yield put({ type: APP_START_SUCCEEDED })
  } catch ({ message }) {
    yield put({ type: APP_START_FAILED, payload: message })
  }
}

export default appStart
