import { parseFile } from 'music-metadata';

const parseOptions = {
  skipCovers: true,
};

const getAudioMetadataFromFsFile = filePath => parseFile(filePath, parseOptions);

export default getAudioMetadataFromFsFile;
