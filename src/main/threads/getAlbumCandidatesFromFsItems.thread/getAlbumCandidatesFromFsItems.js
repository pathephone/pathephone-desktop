
import getFolderContents from '~shared/utils/getFolderContents';
import splitFoldersAndFiles from '~shared/utils/splitFoldersAndFiles';

import getCandidateFromFiles from './getAlbumCandidatesFromFsItems/getCandidateFromFiles';

const getAlbumCandidatesFromFsItems = async (fsItems, candidates = []) => {
  const { folders, files } = await splitFoldersAndFiles(fsItems);
  const candidateFromFiles = await getCandidateFromFiles(files);
  if (candidateFromFiles) {
    candidates.push(candidateFromFiles);
  }
  const handleMap = async (folderPath) => {
    const nextFsItems = await getFolderContents(folderPath);
    await getAlbumCandidatesFromFsItems(nextFsItems, candidates);
  };
  await Promise.all(
    folders.map(handleMap),
  );
  return candidates;
};

export default getAlbumCandidatesFromFsItems;
