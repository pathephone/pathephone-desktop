
const splitFoldersAndFiles = files => {
  const handleReduce = (acc, file) => {
    if (file.type === '' && file.size > 0) {
      acc.folders.push(file)
    } else {
      acc.files.push(file)
    }
    return acc
  }
  return files.reduce(handleReduce, {
    files: [],
    folders: []
  })
}

export default splitFoldersAndFiles
