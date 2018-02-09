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

    const { format } = metadata
    const { tags } = format

    resolve({
      artist: tags.artist || tags.ARTIST,
      title: tags.title || tags.TITLE,
      album: tags.album || tags.ALBUM,
      bitrate: format.bit_rate / 1000,
      duration: format.duration,
      format: format.format_name
    })
  })
})
