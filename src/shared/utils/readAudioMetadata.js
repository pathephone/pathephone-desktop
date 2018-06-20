const musicmetadata = require('musicmetadata')
const fs = require('fs')

const readAudioMetadata = filePath => new Promise((resolve, reject) => {
  const fileStats = fs.statSync(filePath)
  const fileSize = fileStats.size
  musicmetadata(
    fs.createReadStream(filePath), { duration: true }, (err, metadata) => {
      if (err) {
        reject(err)
      } else {
        if (Array.isArray(metadata.artist)) { metadata.artist = metadata.artist[0] }
        metadata.bitrate = fileSize * 8 / (metadata.duration * 1000)
        resolve(metadata)
      }
    }
  )
})

export default readAudioMetadata
