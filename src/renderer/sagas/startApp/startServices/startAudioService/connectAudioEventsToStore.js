import { take, put } from 'redux-saga/effects'
import getAudioEventsChannel from './connectAudioEventsToStore/getAudioEventsChannel'

function * connectAudioEventsToStore (audio) {
  const audioEventsChannel = yield getAudioEventsChannel(audio)
  try {
    while (true) {
      const action = yield take(audioEventsChannel)
      yield put(action)
    }
  } finally {
    console.log('Audio disconnected from store.')
  }
}

export default connectAudioEventsToStore
