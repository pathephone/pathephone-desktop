import getFolderContents from '~utils/getFolderContents'
import splitFoldersAndFiles from '~utils/splitFoldersAndFiles'

import getCandidateFromFiles from './getAlbumCandidatesFromFs/getCandidateFromFiles'

const getAlbumCandidatesFromFs = async (fsItems, candidates = []) => {
  const { folders, files } = await splitFoldersAndFiles(fsItems)
  const candidateFromFiles = await getCandidateFromFiles(files)
  if (candidateFromFiles) {
    candidates.push(candidateFromFiles)
  }
  const handleMap = async folderPath => {
    const nextFsItems = await getFolderContents(folderPath)
    await getAlbumCandidatesFromFs(nextFsItems, candidates)
  }
  await Promise.all(
    folders.map(handleMap)
  )
  return candidates
}

export default getAlbumCandidatesFromFs
