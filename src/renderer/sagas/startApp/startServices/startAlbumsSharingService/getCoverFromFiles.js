import checkFileIsImage from '~utils/checkFileIsImage'

const getCoverFromFiles = async ({ selectedFiles, ipfsApi }) => {
  let images = selectedFiles.filter(checkFileIsImage)
  if (images.length > 0) {
    let frontCover
    if (images.length > 1) {
      frontCover = images.find(({ name }) => name.includes('front'))
    }
    const coverPath = frontCover ? frontCover.path : images[0].path
    const ipfsOutput = await ipfsApi.util.addFromFs(coverPath)
    return ipfsOutput[0].hash
  }
}

export default getCoverFromFiles
