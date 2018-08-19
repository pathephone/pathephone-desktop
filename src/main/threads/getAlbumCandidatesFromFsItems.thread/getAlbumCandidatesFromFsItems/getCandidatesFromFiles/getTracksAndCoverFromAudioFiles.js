import getAudioMetadataFromFsFile from '~shared/utils/getAudioMetadataFromFsFile';
import sortTracks from './sortTracks';

const normalizeMetadata = ({
  common: {
    track, title, album, artist, picture,
  },
}) => ({
  title, artist, album, trackNumber: track && track.no, cover: picture,
});

const getTracksAndCoverFromAudioFiles = async (audioFiles) => {
  const output = {
    tracks: [],
    cover: null,
  };
  for (let i = 0; i < audioFiles.length; i += 1) {
    const file = audioFiles[i];
    // eslint-disable-next-line no-await-in-loop
    const metadata = await getAudioMetadataFromFsFile(
      file, { skipCovers: !!output.cover },
    );
    const { cover, ...normalizedMetadata } = normalizeMetadata(metadata);
    if (Array.isArray(cover)) {
      const frontCover = cover.find(({ type }) => type.includes('front'));
      output.cover = frontCover || cover[0];
    }
    output.tracks.push({ audio: file, ...normalizedMetadata });
  }
  sortTracks(output.tracks);
  return output;
};

export default getTracksAndCoverFromAudioFiles;
