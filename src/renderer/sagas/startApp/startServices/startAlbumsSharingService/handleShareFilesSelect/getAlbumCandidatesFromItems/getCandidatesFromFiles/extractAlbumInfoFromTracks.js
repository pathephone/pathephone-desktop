
const extractAlbumInfoFromTracks = (tracks) => {
  let title;
  let artist;
  for (const track of tracks) {
    if (title === undefined) {
      title = track.album;
    } else
    if (title !== track.album) {
      title = null;
    }
    if (artist === undefined) {
      artist = track.artist;
    } else
    if (artist !== track.artist) {
      artist = null;
    }
    if (title === null && artist === null) break;
  }
  return { title, artist };
};

export default extractAlbumInfoFromTracks;
