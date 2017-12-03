const fetch = require('node-fetch')
const dagPB = require('ipld-dag-pb')
const dagCBOR = require('ipld-dag-cbor')
const promisify = require('promisify-es6')
const CID = require('cids')
const multihash = require('multihashes')
const Multipart = require('multipart-stream')

export default (endpoint) => {
    const dagPutEndpoint = `${endpoint}/dag/put`
    return (dagNode, options) => new Promise((resolve, reject) => {
    
          let hashAlg = options.hash || 'sha2-256'
          let format
          let inputEnc
    
          if (options.cid && CID.isCID(options.cid)) {
            format = options.cid.codec
            hashAlg = multihash.decode(options.cid.multihash).name
            prepare()
          } else if (options.format) {
            format = options.format
            prepare()
          } else {
            reject(new Error('Invalid arguments'))
          }
    
          function prepare () {
            inputEnc = 'raw'
    
            if (format === 'dag-cbor') {
              dagCBOR.util.serialize(dagNode, finalize)
            }
            if (format === 'dag-pb') {
              dagPB.util.serialize(dagNode, finalize)
            }
          }
    
          async function finalize (err, serialized) {
            if(err)
              reject(new Error('error'))
    
            let stream = new Multipart
            stream.addPart({
              headers: {
                'Content-Disposition': `file; filename=""`,
                'Content-Type': 'application/octet-stream'
              },
              body: serialized
            })
            
            const res = await fetch(`${dagPutEndpoint}?format=${format}&input-enc=${inputEnc}&hash=${hashAlg}`, {method: 'POST', headers: { 'Content-Type': `multipart/form-data; boundary=${stream.boundary}` }, body: stream, compress: false})
            if (res.status !== 200) {
                reject(new Error(res.statusText))
            }
            const result = await res.json()
            if (result['Cid']) {
                resolve(new CID(result['Cid']['/']))
            } else {
                resolve(result)
            }
          }
    })
} 