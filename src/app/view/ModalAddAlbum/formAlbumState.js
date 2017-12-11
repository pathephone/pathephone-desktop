// @flow
import createPoint from 'recall-action'

const getInitial = () => (
  {
    title: '',
    cover: '',
    tracks: [
      {
        title: '',
        hash: '',
        artist: ''
      }
    ]
  }
)

let state = getInitial()

const actions = {
  DROP () {
    state = getInitial()
  },
  ADD_TRACK (...params) {
    state.tracks.push({
      title: '', hash: '', artist: ''
    })
  },
  DELETE_TRACK (index) {
    state.tracks.splice(index, 1)
  }
}

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION) {
      actions[ACTION](...params)
    }
    return state
  }
)

export default point
