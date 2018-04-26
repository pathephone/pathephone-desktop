import { eventChannel } from 'redux-saga'

function transformGateToChannel (gate) {
  return eventChannel(emitter => {
    return gate.listen((data, cid) => {
      emitter({ data, cid })
    })
  })
}

export default transformGateToChannel
