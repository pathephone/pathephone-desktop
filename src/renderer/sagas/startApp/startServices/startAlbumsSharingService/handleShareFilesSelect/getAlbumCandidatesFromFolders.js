import fs from 'fs'
import path from 'path'
import fileType from 'file-type'

import splitFoldersAndFiles from '~utils/splitFilesAndFolders'

import getAlbumCandidateFromFiles from './getAlbumCandidateFromFiles'

const nodeFilesToHTMLFiles = (files, folderPath) => {
  const handleMap = async fileName => {
    const filePath = path.join(folderPath, fileName)
    const fileStat = fs.statSync(filePath)
    let type
    let buffer
    if (fileStat.isDirectory()) {
      type = ''
    } else {
      buffer = fs.readFileSync(filePath)
      type = fileType(buffer).mime
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
  return Promise.all(files.map(handleMap))
}

const handleFilesFilter = file => !file.startsWith('.')

const getFolderContents = folderPath => {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, async (err, files) => {
      if (err) reject(err)
      files.filter(handleFilesFilter)
      const htmlFiles = await nodeFilesToHTMLFiles(files, folderPath)
      const output = splitFoldersAndFiles(htmlFiles)
      resolve(output)
    })
  })
}

async function getAlbumCandidatesFromFolders (folders) {
  const candidates = []
  const handleMap = async folder => {
    const { files, folders } = await getFolderContents(folder.path)
    const candidateFromFiles = await getAlbumCandidateFromFiles(files)
    const candidatesFromFolders = await getAlbumCandidatesFromFolders(folders)
    candidates.push(candidateFromFiles, ...candidatesFromFolders)
  }
  await Promise.all(
    folders.map(handleMap)
  )
  return candidates
}

export default getAlbumCandidatesFromFolders
