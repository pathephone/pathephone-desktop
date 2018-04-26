
import { take, call } from 'redux-saga/effects'

import { ALBUMS_PUBLISH_INTERVAL } from '#constants'

function * startAlbumsReceiver ({ albumsGate, albumsCollection }) {
  setInterval(publishAlbums, ALBUMS_PUBLISH_INTERVAL)
}

export default startAlbumsReceiver
