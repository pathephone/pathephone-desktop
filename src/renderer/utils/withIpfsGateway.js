
import { IPFS_GATAWAY_URL } from '~data/constants'

const withIpfsGateway = cid => IPFS_GATAWAY_URL + '/' + cid

export default withIpfsGateway
