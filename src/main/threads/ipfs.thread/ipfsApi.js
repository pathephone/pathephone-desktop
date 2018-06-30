
const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

export const getIpfsInfo = async ({ ipfsDaemonPromise }) => {
  const { api } = await ipfsDaemonPromise
  const gateway = `http://${api.gatewayHost}:${api.gatewayPort}`
  return { gateway }
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

export const ipfsGetFile = async ({ ipfsDaemonPromise, payload: cid }) => {
  const { api } = await ipfsDaemonPromise
  await api.files.get(cid)
}
