import checkFileIsImage from '~utils/checkFileIsImage'

const getCoverFromFiles = async ({ selectedFiles, ipfsApi }) => {
  let frontCover = selectedFiles.filter(checkFileIsImage)
  if (frontCover.length > 1) {
    frontCover = frontCover.find(({ name }) => name.includes('front'))
  }
  if (frontCover.length > 0) {
    const ipfsOutput = await ipfsApi.util.addFromFs(frontCover[0].path)
    return ipfsOutput[0].hash
  }
}

export default getCoverFromFiles
