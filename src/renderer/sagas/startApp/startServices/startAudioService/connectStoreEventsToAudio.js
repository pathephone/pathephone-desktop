import { take } from 'redux-saga/effects'
import {
  audioSourceChange,
  audioVolumeChange,
  audioPause,
  audioResume
} from '#actions'

const handlers = {
  [audioPause] ({ audio }) {
    audio.pause()
  },
  [audioResume] ({ audio }) {
    audio.play()
  },
  [audioVolumeChange] ({ audio, payload }) {
    audio.volume = payload
  },
  [audioSourceChange] ({ audio, payload }) {
    audio.src = payload
  }
}

function * connectStoreEventsToAudio (audio) {
  while (true) {
    const { type, payload } = yield take(
      [audioPause, audioResume, audioSourceChange, audioVolumeChange]
    )
    handlers[type]({ audio, payload })
  }
}

export default connectStoreEventsToAudio
