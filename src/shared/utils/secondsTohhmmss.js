
const secondsTohhmmss = function (totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60));

  // round seconds
  seconds = Math.round(seconds * 100) / 100;

  let result = (hours === 0 ? '' : `${hours < 10 ? `0${hours}` : hours}:`);
  result += (minutes === 0 ? '' : `${minutes < 10 ? `0${minutes}` : minutes}:`);
  result += seconds < 10 ? `0${seconds}` : seconds;
  return result;
};

export default secondsTohhmmss;
