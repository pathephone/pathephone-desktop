import readID3 from './id3'
import putFilesToIpfs from '~/scripts/putFilesToIpfs'

const checkIsAudio = (file) => {
  return file.type.includes('audio')
}

const getTracksFromFiles = async (files) => {
  files = files.filter(checkIsAudio) // use only audio files

  const hashes = await putFilesToIpfs(files)
  return Promise.all(hashes.map(async ({hash}, index) => {
    const file = files[index]
    try {
      const {title, album, artist, bitrate} = await readID3(file)
      return {title, album, artist, bitrate, hash}
    } catch (e) {
      return {hash}
    }
  }))
}

export default getTracksFromFiles
