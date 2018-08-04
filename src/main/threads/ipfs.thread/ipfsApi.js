import {
  IPC_IPFS_CID_CACHE_SUCCEED,
  IPC_IPFS_CID_CACHE_FAILED
} from '~data/ipcTypes'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

export const getIpfsInfo = async ({ ipfsDaemonPromise }) => {
  const { api } = await ipfsDaemonPromise
  const gateway = `http://${api.gatewayHost}:${api.gatewayPort}`
  const apiEndpoint = `http://${api.apiHost}:${api.apiPort}/api/v0`
  return { gateway, apiEndpoint }
}

export const ipfsShareObject = async ({ ipfsDaemonPromise, payload: object }) => {
  const { api } = await ipfsDaemonPromise
  const cidObj = await api.dag.put(object, dagParams)
  const cid = cidObj.toBaseEncodedString()
  return cid
}

export const ipfsShareFsFile = async ({ ipfsDaemonPromise, payload: filePath }) => {
  const { api } = await ipfsDaemonPromise
  const output = await api.util.addFromFs(filePath)
  const { hash } = output[0]
  return hash
}

export const ipfsCacheFilesByCIDs = async ({ ipfsDaemonPromise, payload: cids }) => {
  const { api } = await ipfsDaemonPromise
  const handleGetCID = async cid => {
    try {
      await api.files.get(cid)
      process.send({
        type: IPC_IPFS_CID_CACHE_SUCCEED,
        payload: cid
      })
    } catch (e) {
      console.error(e)
      process.send({
        type: IPC_IPFS_CID_CACHE_FAILED,
        errorMessage: e.message
      })
    }
  }
  Promise.all(
    cids.map(handleGetCID)
  )
}

export const getIPFSStats = async ({ ipfsDaemonPromise }) => {
  const { api } = await ipfsDaemonPromise
  const [ peers, repoStat, bandwidthStat ] = await Promise.all([
    api.swarm.peers(),
    api.repo.stat(),
    api.stats.bw()
  ])
  return {
    peersCount: peers.length,
    repoStat,
    bandwidthStat
  }
}
