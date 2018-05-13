import checkFileIsAudio from '~utils/checkFileIsAudio'
import id3 from '~utils/id3'

const normalizeId3Info = ({ title, artist, bitrate, album }) => ({
  title, artist, bitrate, album
})

const getTracksFromFiles = async ({ selectedFiles, ipfsApi }) => {
  const audioFiles = selectedFiles.filter(checkFileIsAudio)
  const ipfsProcess = Promise.all(
    audioFiles.map(({ path }) => (
      ipfsApi.util.addFromFs(path)
    ))
  )
  const id3Process = Promise.all(
    audioFiles.map(id3)
  )
  const [ ipfsOutput, id3Output ] = await Promise.all([ipfsProcess, id3Process])
  const handleReduce = (acc, ipfsItem, index) => {
    const { hash } = ipfsItem[0]
    const metadata = normalizeId3Info(id3Output[index])
    acc.push({ hash, ...metadata })
    return acc
  }
  return ipfsOutput.reduce(handleReduce, [])
}

export default getTracksFromFiles
