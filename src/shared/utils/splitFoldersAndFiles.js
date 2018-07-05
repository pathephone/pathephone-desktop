import fs from 'fs'

const splitFoldersAndFiles = async files => {
  const data = {
    files: [],
    folders: []
  }
  const resolveFile = (filePath) => new Promise((resolve, reject) => {
    fs.lstat(filePath, (err, stat) => {
      if (err) {
        reject(err)
      } else {
        if (stat.isDirectory()) {
          data.folders.push(filePath)
        } else {
          data.files.push(filePath)
        }
        resolve()
      }
    })
  })
  for (const fileIndex in files) {
    await resolveFile(files[fileIndex])
  }
  return data
}

export default splitFoldersAndFiles
