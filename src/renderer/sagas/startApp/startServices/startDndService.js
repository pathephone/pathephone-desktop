import { call, take, put } from 'redux-saga/effects'
import {
  systemDndStartDetected,
  systemDndEndDetected,
  systemDndDropDetected
} from '#actions-system'
import {
  DND_EVENT_TYPE_START,
  DND_EVENT_TYPE_END,
  DND_EVENT_TYPE_DROP
} from '~data/constants'
import getDndEventsSource from './startDndService/getDndEventsSource'

function * startDndService () {
  const dndEventsSource = yield call(getDndEventsSource)
  try {
    while (true) {
      const { type, payload } = yield take(dndEventsSource)
      if (type === DND_EVENT_TYPE_START) {
        yield put(systemDndStartDetected(payload))
      } else
      if (type === DND_EVENT_TYPE_END) {
        yield put(systemDndEndDetected(payload))
      } else
      if (type === DND_EVENT_TYPE_DROP) {
        yield put(systemDndDropDetected(payload))
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export default startDndService
