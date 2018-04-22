import { all, fork } from 'redux-saga/effects'

import appStatus from './appStatus'

function * rootSaga () {
  yield all([
    fork(appStatus)
  ])
}

export default rootSaga
