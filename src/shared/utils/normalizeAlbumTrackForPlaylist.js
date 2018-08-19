
import getRandomString from '~shared/utils/getRandomString';

const normalizeAlbumTrackForPlaylist = ({ title, artist, audio }) => ({
  title, artist, audio, id: getRandomString(),
});

export default normalizeAlbumTrackForPlaylist;
