import getTracksFromFiles from '~utils/getTracksFromFiles';

import getCoverFromFiles from './getCandidatesFromFiles/getCoverFromFiles';
import extractAlbumInfoFromTracks from './getCandidatesFromFiles/extractAlbumInfoFromTracks';

async function getCandidateFromFiles(apis, files) {
  if (files.length === 0) return;
  const [tracks, coverImage] = await Promise.all([
    getTracksFromFiles(apis, files),
    getCoverFromFiles(apis, files),
  ]);
  if (!tracks) return;
  const { title, artist } = extractAlbumInfoFromTracks(tracks);
  return {
    tracks, cover: { image: coverImage }, artist, title,
  };
}

export default getCandidateFromFiles;
