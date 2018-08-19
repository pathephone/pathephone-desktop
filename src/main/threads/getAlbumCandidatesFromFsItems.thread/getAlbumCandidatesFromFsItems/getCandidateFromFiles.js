
import getCoverFromFsFiles from './getCandidatesFromFiles/getCoverFromFsFiles';
import extractAlbumInfoFromTracks from './getCandidatesFromFiles/extractAlbumInfoFromTracks';
import filterFsFilesByMime from '~shared/utils/filterFsFilesByMime';
import getTracksAndCoverFromAudioFiles from './getCandidatesFromFiles/getTracksAndCoverFromAudioFiles';
import writeMetadataPictureToFs from './getCandidatesFromFiles/writeMetadataPictureToFs';

async function getCandidateFromFiles(files) {
  if (files.length === 0) return undefined;
  const audioFiles = await filterFsFilesByMime(files, 'audio/');
  if (audioFiles.length === 0) return undefined;
  let coverImage;
  const { tracks, cover } = await getTracksAndCoverFromAudioFiles(audioFiles);
  if (tracks.length === 0) return undefined;
  if (!cover) {
    coverImage = await getCoverFromFsFiles(files);
  } else {
    coverImage = await writeMetadataPictureToFs(cover);
  }
  const { title, artist } = extractAlbumInfoFromTracks(tracks);
  return {
    tracks, cover: { image: coverImage }, artist, title,
  };
}

export default getCandidateFromFiles;
