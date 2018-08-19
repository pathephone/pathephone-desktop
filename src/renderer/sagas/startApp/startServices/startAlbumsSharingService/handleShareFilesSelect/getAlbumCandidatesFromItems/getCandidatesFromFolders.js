import getCandidateFromFiles from './getCandidateFromFiles';

async function getCandidatesFromFolders(apis, foldersCandidates) {
  if (foldersCandidates.length === 0) return undefined;
  const { getFolderContents } = apis;
  const candidates = [];
  const handleMapFolders = async (folder) => {
    const { files, folders } = await getFolderContents(folder);
    const [
      candidateFromFiles,
      candidatesFromFolders,
    ] = await Promise.all([
      getCandidateFromFiles(apis, files),
      getCandidatesFromFolders(apis, folders),
    ]);
    if (candidateFromFiles) {
      candidates.push(candidateFromFiles);
    }
    if (candidatesFromFolders) {
      candidates.push(...candidatesFromFolders);
    }
  };
  await Promise.all(
    foldersCandidates.map(handleMapFolders),
  );
  return candidates;
}

export default getCandidatesFromFolders;
