
import getCoverFromFiles from './getCandidatesFromFiles/getCoverFromFsFiles';
import extractAlbumInfoFromTracks from './getCandidatesFromFiles/extractAlbumInfoFromTracks';
import getTracksFromFiles from './getCandidatesFromFiles/getTracksFromFsFiles';

async function getCandidateFromFiles(files) {
  if (files.length === 0) return undefined;
  const [tracks, coverImage = null] = await Promise.all([
    getTracksFromFiles(files),
    getCoverFromFiles(files),
  ]);
  if (!tracks) return undefined;
  const { title, artist } = extractAlbumInfoFromTracks(tracks);
  return {
    tracks, cover: { image: coverImage }, artist, title,
  };
}

export default getCandidateFromFiles;
