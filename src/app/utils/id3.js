const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')

export default (file) => new Promise((resolve, reject) => {
  const {path} = file
  ffmpeg.ffprobe(path, (err, metadata) => {
    if (err) {
      reject(err)
      return
    }

    resolve({
      artist: metadata.format.tags.artist,
      title: metadata.format.tags.title,
      album: metadata.format.tags.album,
      bitrate: metadata.format.bit_rate / 1000,
      duration: metadata.format.duration,
      format: metadata.format.format_name
    })
  })
})
