import { fork } from 'redux-saga/effects'

import connectAudioEventsToStore from './startAudioService/connectAudioEventsToStore'
import connectStoreEventsToAudio from './startAudioService/connectStoreEventsToAudio'

function * startAudioService () {
  const audio = new Audio()
  yield [
    fork(connectAudioEventsToStore, audio),
    fork(connectStoreEventsToAudio, audio)
  ]
}

export default startAudioService
