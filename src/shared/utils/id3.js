const musicmetadata = require('musicmetadata')
const fs = require('fs')

export default (file) => new Promise((resolve, reject) => {
  const { path } = file
  const fileStats = fs.statSync(path)
  const fileSize = fileStats.size
  musicmetadata(
    fs.createReadStream(path), { duration: true }, (err, metadata) => {
      if (err) {
        reject(err)
        return
      }
      if (Array.isArray(metadata.artist)) { metadata.artist = metadata.artist[0] }
      metadata.bitrate = fileSize * 8 / (metadata.duration * 1000)
      resolve(metadata)
    }
  )
})
