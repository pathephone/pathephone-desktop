const CID = require('cids')

export default (incom) => {
  if (typeof incom === 'string') return incom
  const cidObj = new CID(incom)
  return cidObj.toBaseEncodedString()
}
