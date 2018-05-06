import { take, call, select } from 'redux-saga/effects'
import { uiPlayerPaused, uiPlayerResumed, uiVolumeChanged, uiPlaylistTrackPlayed } from '#actions-ui'
import { getPlayedTrackSource } from '#selectors'

const handlers = {
  [uiPlayerPaused] ({ audio }) {
    audio.pause()
  },
  [uiPlayerResumed] ({ audio }) {
    audio.play()
  },
  [uiVolumeChanged] ({ audio, payload }) {
    audio.volume = payload
  },
  * [uiPlaylistTrackPlayed] ({ audio }) {
    const src = yield select(getPlayedTrackSource)
    audio.src = src
  }
}

function * connectStoreEventsToAudio (audio) {
  while (true) {
    const { type, payload } = yield take(
      [uiPlayerPaused, uiPlayerResumed, uiPlaylistTrackPlayed, uiVolumeChanged]
    )
    yield call(handlers[type]({ audio, payload }))
  }
}

export default connectStoreEventsToAudio
