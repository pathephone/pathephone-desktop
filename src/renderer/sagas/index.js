import { all, fork } from 'redux-saga/effects'

import startApp from './startApp'

function * rootSaga () {
  yield all([
    fork(startApp)
  ])
}

export default rootSaga
