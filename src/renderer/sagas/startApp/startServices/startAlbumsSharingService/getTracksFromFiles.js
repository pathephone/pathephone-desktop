import checkFileIsAudio from '~utils/checkFileIsAudio'
import id3 from '~utils/id3'

const normalizeId3Info = ({ title, artist, bitrate, album }) => ({
  title, artist, bitrate, album
})

const getTracksFromFiles = async files => {
  const audioFiles = files.filter(checkFileIsAudio)
  if (audioFiles.length === 0) {
    return
  }
  const handleMap = async file => {
    const id3Output = await id3(file)
    return { file, ...normalizeId3Info(id3Output) }
  }
  return Promise.all(
    audioFiles.map(handleMap)
  )
}

export default getTracksFromFiles
