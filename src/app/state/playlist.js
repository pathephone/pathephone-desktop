// @flow
import createPoint from 'recall-action'
import getRandomString from '../utils/getRandomString'

export const state = []

const actions = {
  ADD_TRACKS (...tracks) {
    tracks.forEach(
      (trackObj) => {
        const id = getRandomString()
        const current = state.length === 0
        const downloaded = false
        const track = { ...trackObj, id, current, downloaded }
        state.push(track)
      }
    )
  },
  REMOVE_TRACKS (...ids) {
    ids.forEach(id => {
      const index = state.findIndex(
        (obj, index) => obj.id === id
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
    current.current = false
    const target = state.find(
      ({ id }) => nextCurrentId === id
    )
    target.current = true
  },
  SET_DOWNLOADED (hash) {
    const handleFilter = t => t.hash === hash
    const targets = state.filter(handleFilter)
    const handleEach = t => { t.downloaded = true }
    targets.forEach(handleEach)
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
