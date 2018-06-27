import { basename } from 'path'

const getCoverFromFiles = async (apis, files) => {
  const { filterFsFilesByMime } = apis
  let images = await filterFsFilesByMime(files, 'image/')
  if (images.length > 0) {
    let frontCover
    if (images.length > 1) {
      frontCover = images.find(filePath => basename(filePath).includes('front'))
    }
    if (frontCover) return frontCover
    return images[0]
  }
}

export default getCoverFromFiles
