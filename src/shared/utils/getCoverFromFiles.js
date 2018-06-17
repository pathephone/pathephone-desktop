import { basename } from 'path'

import checkFsFileIsImage from '~utils/checkFsFileIsImage'

const getCoverFromFiles = async (files) => {
  let images = files.filter(checkFsFileIsImage)
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
