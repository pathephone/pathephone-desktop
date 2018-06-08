import checkFileIsImage from '~utils/checkFileIsImage'

const getCoverFromFiles = async (files) => {
  let images = files.filter(checkFileIsImage)
  if (images.length > 0) {
    let frontCover
    if (images.length > 1) {
      frontCover = images.find(({ name }) => name.includes('front'))
    }
    if (frontCover) return frontCover
    return images[0]
  }
}

export default getCoverFromFiles
