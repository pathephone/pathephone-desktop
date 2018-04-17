// @flow
import createPoint from 'recall-action'

const getRaw = () => ({
  title: '',
  artist: '',
  cover: '',
  tracks: []
})

export let state = getRaw()

const actions = {
  DROP () {
    state = getRaw()
  },
  REPLACE_DATA (albumData) {
    const { title, artist, cover, tracks } = albumData
    state = { title, artist, cover, tracks }
  },
  EDIT_ABOUT (field, value) {
    state[field] = value
  },
  ADD_TRACKS (...params) {
    params.forEach(({ title, hash, artist, bitrate }) => {
      state.tracks.push({
        title, hash, artist, bitrate
      })
    })
  },
  EDIT_TRACK (index, field, value) {
    const target = state.tracks[index]
    if (target) {
      target[field] = value
    }
  },
  MOVE_TRACK_UP (index) {
    if (index > 0) {
      const targetTrack = state.tracks[index]
      const previousTrack = state.tracks[index - 1]
      state.tracks[index] = previousTrack
      state.tracks[index - 1] = targetTrack
    }
  },
  MOVE_TRACK_DOWN (index) {
    if (index < state.tracks.length - 1) {
      const targetTrack = state.tracks[index]
      const previousTrack = state.tracks[index + 1]
      state.tracks[index] = previousTrack
      state.tracks[index + 1] = targetTrack
    }
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
