import { take, select } from 'redux-saga/effects'
import { uiPlaybackPaused, uiPlaybackResumed, uiVolumeChanged, uiPlaylistTrackPlayed, uiSeekStarted, uiSeekStoped } from '#actions-ui'
import { getPlayedTrackSource } from '#selectors'

function * connectStoreEventsToAudio (audio) {
  while (true) {
    const { type, payload } = yield take(
      [
        uiPlaybackPaused,
        uiPlaybackResumed,
        uiPlaylistTrackPlayed,
        uiSeekStoped,
        uiVolumeChanged
      ]
    )
    switch (type) {
      case uiPlaybackPaused.toString():
        audio.pause()
        break
      case uiPlaybackResumed.toString():
        audio.play()
        break
      case uiSeekStoped.toString():
        audio.currentTime = payload
        break
      case uiVolumeChanged.toString():
        audio.volume = payload
        break
      case uiPlaylistTrackPlayed.toString():
        const src = yield select(getPlayedTrackSource)
        audio.src = src
    }
  }
}

export default connectStoreEventsToAudio
