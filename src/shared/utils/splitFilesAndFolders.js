import fs from 'fs'

const splitFoldersAndFiles = files => {
  const initialMap = {
    files: [],
    folders: []
  }
  const handleReduce = (acc, filePath) => {
    const isDireactory = fs.lstatSync(filePath).isDirectory()
    if (isDireactory) {
      acc.folders.push(filePath)
    } else {
      acc.files.push(filePath)
    }
    return acc
  }
  const finalMap = files.reduce(handleReduce, initialMap)
  return finalMap
}

export default splitFoldersAndFiles
