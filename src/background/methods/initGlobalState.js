import ipfsDaemonState from '../state/ipfsDaemon'

const initGlobalState = () => {
  global.state = { ipfsDaemonState }
}

export default initGlobalState
