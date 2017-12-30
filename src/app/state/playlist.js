// @flow
import createPoint from 'recall-action'
import getRandomString from '../utils/getRandomString'

export const state = []

const actions = {
  ADD_TRACKS (tracks) {
    const _tracks = tracks.map(
      (trackObj) => {
        const id = getRandomString()
        return {
          ...trackObj,
          id,
          current: false
        }
      }
    )
    state.push(..._tracks)
  },
  REMOVE_TRACKS (...ids) {
    ids.forEach(id => {
      const index = state.findIndex(
        (obj, index) => {
          if (obj.id === id) {
            if (obj.current) {
              const nextCurrent = state[index + 1]
              if (nextCurrent) {
                nextCurrent.current = true
              }
            }
            return true
          }
        }
      )
      state.splice(index, 1)
    })
  },
  CLEAR () {
    state.length = 0
  },
  SET_CURRENT (nextCurrentId) {
    const current = state.find(
      ({ current }) => current
    )
    if (current) {
      current.current = false
    }
    const target = state.find(
      ({ id }) => nextCurrentId === id
    )
    target.current = true
  },
  UNSET_CURRENT () {
    const current = state.find(
      ({ current }) => current
    )
    if (current) {
      current.current = false
    }
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
