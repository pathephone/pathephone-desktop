
import { IPFS_GATEAWAY_URL } from '~data/constants'

const withIpfsGateway = cid => IPFS_GATEAWAY_URL + '/' + cid

export default withIpfsGateway
