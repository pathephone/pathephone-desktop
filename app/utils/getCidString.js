const CID = require('cids');

export default (incom) => {
  if (typeof incom === 'string') return incom;
  const cidObj = new CID(1, 'dag-cbor', incom);
  return cidObj.toBaseEncodedString();
};
