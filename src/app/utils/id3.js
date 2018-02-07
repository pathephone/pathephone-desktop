import appPath from '~/utils/electronAppPath'
const ffmpeg = require('fluent-ffmpeg')

ffmpeg.setFfmpegPath(appPath('ffmpeg'))
ffmpeg.setFfprobePath(appPath('ffprobe'))

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
