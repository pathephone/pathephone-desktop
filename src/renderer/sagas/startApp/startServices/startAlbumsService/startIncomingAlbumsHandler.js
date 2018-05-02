import { put, take } from 'redux-saga/effects'

import { reportAlbumCandidate } from '#actions'

function * startAlbumsReceiver ({ incomingAlbumsChannel, albumsCollection }) {
  try {
    while (true) {
      const { cid, data } = yield take(incomingAlbumsChannel)
      const lastSeen = new Date().getTime()
      yield put(reportAlbumCandidate, { cid, data, lastSeen })
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsReceiver
