import { openGate as openMetabinGate } from '@metabin/gate'
import { remote } from 'electron'
import getIpfsApiNode, { startIpfsApi } from '~utils/ipfs/ipfsApi/index'

const startIpfsDaemon = remote.getGlobal('startIpfsDaemon')

export const getIpfsApi = async () => {
  await startIpfsDaemon()
  startIpfsApi()
  return getIpfsApiNode()
}

export const openGate = ({ ipfsApi, schema }) => (
  openMetabinGate(ipfsApi, schema)
)
