import { all, fork } from 'redux-saga/effects'

import startApp from './sagas/startApp'

function * rootSaga () {
  yield all([
    fork(startApp)
  ])
}

export default rootSaga
