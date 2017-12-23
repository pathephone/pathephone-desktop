import fs from 'fs'

export default function directoryFilesRecursive (directory, filesList = []) {
  const files = fs.readdirSync(directory)
  for (const file of files) {
    const filePath = `${directory}/${file}`
    if (fs.statSync(filePath).isDirectory()) {
      directoryFilesRecursive(filePath, filesList)
    } else {
      filesList.push(filePath)
    }
  }
  return filesList
}
