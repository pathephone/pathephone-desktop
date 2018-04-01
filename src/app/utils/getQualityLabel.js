const getQualityLabel = (bitrate) => {
  if (bitrate < 256) {
    return 'LQ'
  } else
  if (bitrate < 500) {
    return 'HQ'
  } else {
    return 'LS'
  }
}

export default getQualityLabel
