
const extractAlbumInfoFromTracks = (tracks) => {
  let title;
  let artist;
  for (let i = 0; i < tracks.length; i += 1) {
    const track = tracks[i];
    if (title === undefined) {
      title = track.album;
    } else
    if (title !== track.album) {
      title = null;
    }
    if (artist === undefined) {
      ({ artist } = track);
    } else
    if (artist !== track.artist) {
      artist = null;
    }
    if (title === null && artist === null) break;
  }
  return { title, artist };
};

export default extractAlbumInfoFromTracks;
