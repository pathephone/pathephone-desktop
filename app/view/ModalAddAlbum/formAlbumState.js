// @flow
import createPoint from 'utils/recallPoint'

type album = {
  title: string,
  artist: string,
  cover: string,
  tracks: [
    {
      title: string,
      hash: string
    }
  ]
};

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
  }: album
)

let state = getInitial()

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION === 'DROP') {
      state = getInitial()
    }
    if (ACTION === 'SET_VALUE') {
      const [name, value] = params
      state[name] = value
    }
    if (ACTION === 'ADD_TRACK') {
      state.tracks.push({
        title: '', hash: ''
      })
    }
    if (ACTION === 'EDIT_TRACK') {
      const [index, value] = params
      state.tracks[index] = value
    }
    return state
  }
)

export default point
