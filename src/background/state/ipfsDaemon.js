const recallAction = require('recall-action')

const value = {
  started: null,
  errored: null
}

const actions = {
  STARTED () {
    value.started = true
  },
  ERRORED (error) {
    value.errored = error
  },
  CLOSED () {
    value.started = false
  }
}

const state = recallAction((action, ...params) => {
  if (action) {
    actions[action](...params)
  }
  return value
})

export default state
