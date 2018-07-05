import { take, call } from 'redux-saga/effects'

import { systemAppRootMounted } from '~actions/system'

import startApp from './sagas/startApp'

function * rootSaga () {
  yield take(systemAppRootMounted)
  yield call(startApp)
}

export default rootSaga
