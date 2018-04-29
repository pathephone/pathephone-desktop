import { fork } from 'redux-saga/effects'

import startAlbumsReceiver from './startAlbumsProcess/startAlbumsReceiver'
import startAlbumsPublisher from './startAlbumsProcess/startAlbumsPublisher'

function * startAlbumsProcess (args) {
  yield [
    fork(startAlbumsReceiver, args),
    fork(startAlbumsPublisher, args)
  ]
}

export default startAlbumsProcess
