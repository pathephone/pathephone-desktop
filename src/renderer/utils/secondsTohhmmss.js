
var secondsTohhmmss = function (totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600)
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
  var seconds = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60))

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  var result = (hours === 0 ? '' : (hours < 10 ? '0' + hours : hours) + ':')
  result += (minutes === 0 ? '' : (minutes < 10 ? '0' + minutes : minutes) + ':')
  result += seconds < 10 ? '0' + seconds : seconds
  return result
}

export default secondsTohhmmss
