import { eventChannel } from 'redux-saga'

async function gateToSagaChannel (gate) {
  let handler
  const listener = (...args) => {
    if (handler) handler(...args)
  }
  const stopListener = await gate.listen(listener)
  return eventChannel(emitter => {
    handler = emitter
    return stopListener
  })
}

export default gateToSagaChannel
