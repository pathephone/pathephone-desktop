import { parseFile } from 'music-metadata';

const defaultOptions = {
  skipCovers: true,
};

const getAudioMetadataFromFsFile = (filePath, options = defaultOptions) => (
  parseFile(filePath, options)
);

export default getAudioMetadataFromFsFile;
