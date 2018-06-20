import fs from 'fs'
import path from 'path'
import fileType from 'file-type'
import readChunk from 'read-chunk'

const fsFileToHTMLFile = filePath => {
  const fileStat = fs.statSync(filePath)
  const fileName = path.basename(filePath)
  let type
  let buffer
  if (fileStat.isDirectory()) {
    type = ''
  } else {
    buffer = readChunk.sync(filePath, 0, 4100)
    const output = fileType(buffer)
    type = output ? output.mime : ''
  }
  if (type.startsWith('image/')) {
    buffer = fs.readFileSync(filePath)
  }
  const fileObj = new File([buffer], fileName, { type })
  Object.defineProperties(
    fileObj,
    {
      path: {
        value: filePath,
        writable: false
      }
    }
  )
  return fileObj
}

export default fsFileToHTMLFile
