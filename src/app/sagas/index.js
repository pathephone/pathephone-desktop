import { all } from 'redux-saga/effects'
import appStart from './foo'

function * rootSaga () {
  yield all([
    appStart
  ])
}

export default rootSaga
