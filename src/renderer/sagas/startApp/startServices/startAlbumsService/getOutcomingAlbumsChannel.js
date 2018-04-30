import { eventChannel } from 'redux-saga'

import { ALBUMS_PUBLISH_INTERVAL, ALBUMS_APEARENCE_INTERVAL } from '~data/constants'

function albumsToPublishChannel (albumsCollection) {
  const handleTick = () => {
    const period = new Date().getTime() - ALBUMS_APEARENCE_INTERVAL
    return albumsCollection.find({ lastSeen: { $lt: period } }).exec()
  }
  return eventChannel(emitter => {
    const interval = setInterval(handleTick, ALBUMS_PUBLISH_INTERVAL)
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(interval)
    }
  }
  )
}

export default albumsToPublishChannel
