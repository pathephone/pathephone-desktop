import fs from 'fs'
import path from 'path'

import splitFoldersAndFiles from '~utils/splitFilesAndFolders'

import getAlbumCandidateFromFiles from './getCandidateFromFiles'

const handleItemsFilter = file => !file.startsWith('.')

const getFolderContents = folderPath => {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, async (err, items) => {
      if (err) reject(err)
      const filteredItems = items.filter(handleItemsFilter)
      const handleFullPathJoin = itemName => path.join(folderPath, itemName)
      const itemsWithFullPath = filteredItems.map(handleFullPathJoin)
      const output = splitFoldersAndFiles(itemsWithFullPath)
      resolve(output)
    })
  })
}

async function getAlbumCandidatesFromFolders (folders) {
  const candidates = []
  const handleMapFolders = async folder => {
    const { files, folders } = await getFolderContents(folder)
    const [
      candidateFromFiles,
      candidatesFromFolders
    ] = await Promise.all([
      getAlbumCandidateFromFiles(files),
      getAlbumCandidatesFromFolders(folders)
    ])
    candidates.push(candidateFromFiles, ...candidatesFromFolders)
  }
  await Promise.all(
    folders.map(handleMapFolders)
  )
  return candidates
}

export default getAlbumCandidatesFromFolders
