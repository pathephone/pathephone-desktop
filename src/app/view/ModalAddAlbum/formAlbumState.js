// @flow
import createPoint from 'recall-action'


const getInitial = () => (
  {
    title: '',
    artist: '',
    cover: '',
    tracks: [
      {
        title: '',
        hash: ''
      }
    ]
  }
)

let state = getInitial()

const actions = {
  DROP () {
    state = getInitial()
  },
  SET_VALUE (...params) {
    const [name, value] = params
    state[name] = value
  },
  ADD_TRACK (...params) {
    state.tracks.push({
      title: '', hash: ''
    })
  },
  EDIT_TRACK (...params) {
    const [index, value] = params
    state.tracks[index] = value
  },
  GET(name, objectToReturn) {
    objectToReturn[name] = state[name]
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
