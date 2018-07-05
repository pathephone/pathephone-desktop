import { parseFile } from 'music-metadata'

const parseOptions = {
  skipCovers: true
}

const getAudioMetadataFromFsFile = filePath => {
  return parseFile(filePath, parseOptions)
}

export default getAudioMetadataFromFsFile
