import { take, all, put } from 'redux-saga/effects'

import { initAlbumPublication } from '#actions'

function * startAlbumsBroadcaster ({ outcomingAlbumsChannel }) {
  try {
    while (true) {
      const albums = yield take(outcomingAlbumsChannel)
      const handleMap = album => put(initAlbumPublication(album))
      yield all(
        albums.map(handleMap)
      )
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsBroadcaster
