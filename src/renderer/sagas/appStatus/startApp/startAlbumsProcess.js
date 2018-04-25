import { fork, call, put } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

function * startAlbumsProcess ({ albumsGate, albumsCollection }) {
  const albumsListener = async (data, cid) => {
    const lastSeen = new Date().getTime()
    console.log(`-- album candidate received ${cid}`)
    try {
      const exists = await albumsCollection.findOne(cid).exec()
      if (exists) {
        exists.lastSeen = lastSeen
        await exists.save()
        console.log(`-- existing album successfully updated ${cid}`)
      } else {
        await albumsCollection.insert({ cid, data, lastSeen })
        console.log(`-- new album successfully saved ${cid}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  albumsGate.listen(albumsListener)
}

export default startAlbumsProcess
