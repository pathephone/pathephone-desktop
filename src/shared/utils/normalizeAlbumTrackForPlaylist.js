
import getRandomString from '~utils/getRandomString';

const normalizeAlbumTrackForPlaylist = ({ title, artist, audio }) => ({
  title, artist, audio, id: getRandomString(),
});

export default normalizeAlbumTrackForPlaylist;
