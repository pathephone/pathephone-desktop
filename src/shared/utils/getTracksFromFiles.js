import checkFsFileIsAudio from '~utils/checkFsFileIsAudio'
import readAudioMetadata from '~utils/readAudioMetadata'

const normalizeMetadata = ({ title, artist, bitrate, album }) => ({
  title, artist, bitrate, album
})

const getTracksFromFiles = async files => {
  const audioFiles = files.filter(checkFsFileIsAudio)
  if (audioFiles.length === 0) {
    return
  }
  const handleMap = async file => {
    const id3Output = await readAudioMetadata(file)
    return { audio: file, ...normalizeMetadata(id3Output) }
  }
  return Promise.all(
    audioFiles.map(handleMap)
  )
}

export default getTracksFromFiles
