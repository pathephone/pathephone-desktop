import { openGate } from '@metabin/gate'
import { remote } from 'electron'

import { dagParams } from '~data/config'

import startIpfsApi from './getCustomIpfsApi/ipfs/ipfsApi'

const startIpfsDaemon = remote.getGlobal('startIpfsDaemon')

const getCustomIpfsApi = async () => {
  await startIpfsDaemon()
  const ipfsApi = startIpfsApi()

  const shareObjectToIpfs = async obj => {
    const cidObj = await ipfsApi.dag.put(obj, dagParams)
    return cidObj.toBaseEncodedString()
  }
  const shareFsFileToIpfs = async file => {
    const output = await ipfsApi.util.addFromFs(file)
    return output[0].hash
  }
  const openMetabinGate = (schema) => (
    openGate(ipfsApi, schema)
  )

  return { shareFsFileToIpfs, shareObjectToIpfs, openMetabinGate, ipfsApi }
}

export default getCustomIpfsApi
