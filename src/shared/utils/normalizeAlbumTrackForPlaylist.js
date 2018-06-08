
import getRandomString from '~utils/getRandomString'

const normalizeAlbumTrackForPlaylist = ({ title, artist, hash }) => ({
  title, artist, cid: hash, id: getRandomString()
})

export default normalizeAlbumTrackForPlaylist
