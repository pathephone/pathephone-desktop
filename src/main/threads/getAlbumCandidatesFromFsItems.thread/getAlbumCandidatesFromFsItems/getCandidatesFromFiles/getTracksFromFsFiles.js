import filterFsFilesByMime from '~utils/filterFsFilesByMime'
import getAudioMetadataFromFsFile from '~utils/getAudioMetadataFromFsFile'

const normalizeMetadata = ({
  common: { track, title, album, artist }
}) => ({
  title, artist, album, trackNumber: track.no
})

const getTracksFromFsFiles = async (files) => {
  const audioFiles = await filterFsFilesByMime(files, 'audio/')
  if (audioFiles.length === 0) {
    return
  }
  const handleMap = async file => {
    const metadata = await getAudioMetadataFromFsFile(file)
    return { audio: file, ...normalizeMetadata(metadata) }
  }
  const tracks = await Promise.all(
    audioFiles.map(handleMap)
  )
  const handleSort = (a, b) => {
    if (a.trackNumber === null) {
      return 0
    }
    if (a.trackNumber < b.trackNumber) {
      return -1
    }
    return 1
  }
  tracks.sort(handleSort)
  return tracks
}

export default getTracksFromFsFiles
