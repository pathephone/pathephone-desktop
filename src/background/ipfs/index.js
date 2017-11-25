const startIpfsDaemon = require('./startIpfsDaemon')
const beforeStartIpfs = require('./beforeStartIpfs')
const recallAction = require('recall-action')

const api = {}

const state = {
  ready: null
}

const actions = {
  READY () {
    state.ready = true
  }
}

const point = recallAction((action, ...params) => {
  if (action) {
    actions[action](...params)
  }
  return state
})

global.ipfsDaemon = point

const startIpfs = async () => {
  await beforeStartIpfs()
  api.process = await startIpfsDaemon({
    onReady () {
      point('READY')
    },
    onError () {

    },
    onUnexpectedClose () {

    }
  })
}

const stopIpfs = () => {
  if (api.process) {
    api.process.kill()
    delete api.process
  }
}

module.exports = { startIpfs, stopIpfs }
