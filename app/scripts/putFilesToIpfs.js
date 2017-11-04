const { getIpfs } = require('../api/ipfs')

const fileToBuffer = (file) => new Promise((resolve, reject) => {
  const reader = new window.FileReader()
  reader.onloadend = () => {
    const buffer = Buffer.from(reader.result)
    resolve(buffer)
  }
  reader.onerror = (e) => {
    reject(e)
  }
  reader.readAsArrayBuffer(file)
})

const putFilesToIpfs = async (files) => {
  const ipfs = await getIpfs()
  const filesArray = Array.from(files)
  const arrayOfBuffers = await Promise.all(
    filesArray.map(fileToBuffer)
  )
  const dataReturned = await Promise.all(
    arrayOfBuffers.map(buffer => ipfs.add(buffer))
  )
  const ipfsHashes = dataReturned.map((arr) => arr[0])
  return ipfsHashes
}

export default putFilesToIpfs
