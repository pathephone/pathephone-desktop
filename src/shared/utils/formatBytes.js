function formatBytes (a, b) {
  if (a === 0) {
    return '0 Bytes'
  }
  var c = 1024
  var d = b || 2
  var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

export default formatBytes
