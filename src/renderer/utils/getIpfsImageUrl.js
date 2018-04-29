
import { IPFS_GATAWAY_URL } from '~data/constants'

const getIpfsImageUrl = cid => IPFS_GATAWAY_URL + '/' + cid

export default getIpfsImageUrl
