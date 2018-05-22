import { take, put } from 'redux-saga/effects'
import getAudioEventsSource from './connectAudioEventsToStore/getAudioEventsSource'

function * connectAudioEventsToStore (audio) {
  const audioEventsSource = yield getAudioEventsSource(audio)
  try {
    while (true) {
      const action = yield take(audioEventsSource)
      yield put(action)
    }
  } finally {
    console.log('Audio disconnected from store.')
  }
}

export default connectAudioEventsToStore
