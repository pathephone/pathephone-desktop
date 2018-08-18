
const handleSort = (a, b) => {
  const skip = typeof a.trackNumber !== 'number' || typeof b.trackNumber !== 'number';
  if (skip) {
    return 0;
  }
  if (a.trackNumber < b.trackNumber) {
    return -1;
  }
  return 1;
};

const sortTracks = (tracks) => {
  tracks.sort(handleSort);
};

export default sortTracks;
