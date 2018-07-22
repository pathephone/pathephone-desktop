import { systemIpfsInfoRecieved } from '~actions/system'

const DOMAIN = 'ipfsInfo'

const initialState = {
  gateway: null,
  apiEndpoint: null
}

export const getIpfsGateway = state => state[DOMAIN].gateway
export const getIpfsApiEndpoint = state => state[DOMAIN].apiEndpoint

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemIpfsInfoRecieved.toString():
      return { ...payload }
    default:
      return state
  }
}

export default reducer
