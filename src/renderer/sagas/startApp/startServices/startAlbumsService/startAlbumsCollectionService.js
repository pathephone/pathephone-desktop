import { spawn, all } from 'redux-saga/effects'
import startAlbumsCollectionReciever from './startAlbumsCollectionService/startAlbumsCollectionReciever'
import startAlbumsCollectionPublisher from './startAlbumsCollectionService/startAlbumsCollectionPublisher'

function * startAlbumsCollectionService (args) {
  yield all([
    spawn(startAlbumsCollectionReciever, args),
    spawn(startAlbumsCollectionPublisher, args)
  ])
}

export default startAlbumsCollectionService
