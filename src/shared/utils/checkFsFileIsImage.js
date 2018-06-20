import fileType from 'file-type'
import readChunk from 'read-chunk'

const checkFsFileIsImage = filePath => {
  const buffer = readChunk.sync(filePath, 0, 4100)
  const output = fileType(buffer)
  if (output && output.mime) {
    return output.mime.startsWith('image/')
  }
  return false
}

export default checkFsFileIsImage
