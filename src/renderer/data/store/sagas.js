import { all, fork } from 'redux-saga/effects'
import appStart from './appStart'

function * rootSaga () {
  yield all([
    fork(appStart)
  ])
}

export default rootSaga
