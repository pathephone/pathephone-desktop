import blobStream from 'blob-stream'

const streamToBlob = (stream) => {
  return new Promise((resolve, reject) => {
    stream
      .pipe(blobStream())
      .on('error', reject)
      .on('finish', function () {
        const blob = this.toBlob()
        resolve(blob)
      })
  })
}

export default streamToBlob
