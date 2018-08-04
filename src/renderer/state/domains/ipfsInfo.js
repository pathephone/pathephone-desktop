import {
  systemIpfsInfoRecieved,
  systemMetabinPeersRecieved,
  systemIpfsStatsRecieved
} from '~actions/system'

const DOMAIN = 'ipfsInfo'

const initialState = {
  isOffline: false,
  gateway: null,
  apiEndpoint: null,
  peersCount: null,
  metabinPeersCount: null,
  repoStat: null,
  bandwidthStat: null
}

export const getIpfsIsOffline = state => state[DOMAIN].isOffline
export const getIpfsGateway = state => state[DOMAIN].gateway
export const getIpfsApiEndpoint = state => state[DOMAIN].apiEndpoint
export const getIpfsPeers = state => state[DOMAIN].peersCount
export const getMetabinPeers = state => state[DOMAIN].metabinPeersCount
export const getIPFSRepoStat = state => state[DOMAIN].repoStat
export const getIPFSBandwidthStat = state => state[DOMAIN].bandwidthStat

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemIpfsInfoRecieved.toString():
    case systemIpfsStatsRecieved.toString():
    case systemMetabinPeersRecieved.toString():
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default reducer
