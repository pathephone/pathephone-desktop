function formatBytes(a, b) {
  if (a === 0) {
    return '0 Bytes';
  }
  const c = 1024;
  const d = b || 2;
  const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const f = Math.floor(Math.log(a) / Math.log(c));
  return `${parseFloat((a / (c ** f)).toFixed(d))} ${e[f]}`;
}

export default formatBytes;
