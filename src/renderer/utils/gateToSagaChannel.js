import { eventChannel } from 'redux-saga'

function gateToSagaChannel (gate) {
  return eventChannel(emitter => {
    return gate.listen(emitter)
  })
}

export default gateToSagaChannel
