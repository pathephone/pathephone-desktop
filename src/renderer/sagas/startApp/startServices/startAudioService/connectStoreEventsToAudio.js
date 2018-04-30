import { take } from 'redux-saga/effects'
import {
  initAudioSourceChange,
  initAudioVolumeChange,
  initAudioPause,
  initAudioResume
} from '#actions'

const handlers = {
  [initAudioPause] ({ audio }) {
    audio.pause()
  },
  [initAudioResume] ({ audio }) {
    audio.play()
  },
  [initAudioVolumeChange] ({ audio, payload }) {
    audio.volume = payload
  },
  [initAudioSourceChange] ({ audio, payload }) {
    audio.src = payload
  }
}

function * connectStoreEventsToAudio (audio) {
  while (true) {
    const { type, payload } = yield take(
      [initAudioPause, initAudioResume, initAudioSourceChange, initAudioVolumeChange]
    )
    handlers[type]({ audio, payload })
  }
}

export default connectStoreEventsToAudio
