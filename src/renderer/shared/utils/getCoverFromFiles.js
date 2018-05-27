import putFilesToIpfs from '../scripts/putFilesToIpfs'
import checkIsImage from './checkIsImage'

const getCoverFromFiles = async (files) => {
  files = files.filter(checkIsImage) // only images
  if (files.length > 0) {
    return (await putFilesToIpfs(files))[0].hash
  }
}

export default getCoverFromFiles
