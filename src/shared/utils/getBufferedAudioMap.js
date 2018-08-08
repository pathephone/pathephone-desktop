
const getBufferedAudioMap = ({ buffered, duration }) => {
  if (!duration) return undefined;
  const bufferedMap = [];
  const percent = duration / 100;
  if (buffered.length > 0) {
    for (let i = 0; i < buffered.length; i += 1) {
      const start = buffered.start(i) / percent;
      const end = buffered.end(i) / percent;
      bufferedMap.push([start, end]);
    }
  } else {
    const start = buffered.start(0) / percent;
    const end = buffered.end(0) / percent;
    bufferedMap.push([start, end]);
  }
  return bufferedMap;
};

export default getBufferedAudioMap;
