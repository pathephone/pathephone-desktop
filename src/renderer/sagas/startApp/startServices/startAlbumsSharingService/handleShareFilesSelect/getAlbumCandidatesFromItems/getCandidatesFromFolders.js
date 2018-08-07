import getCandidateFromFiles from './getCandidateFromFiles';

async function getCandidatesFromFolders(apis, folders) {
  if (folders.length === 0) return;
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
    folders.map(handleMapFolders),
  );
  return candidates;
}

export default getCandidatesFromFolders;
