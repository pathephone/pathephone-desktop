
import getRandomString from '~utils/getRandomString'

const albumTrackToPlaylistTrack = ({ title, artist, cid }) => ({
  title, artist, cid, id: getRandomString()
})

export default albumTrackToPlaylistTrack
