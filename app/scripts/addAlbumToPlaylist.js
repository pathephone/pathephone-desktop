import playlistState from '../state/playlist';
import getRandomString from '../utils/getRandomString';

export default ({ data, cid }) => {
  const trackLinks = data.tracks.map(
    (trackObj, trackIndex) => {
      const key = getRandomString();
      return { albumCid: cid, trackIndex, key };
    }
  );
  playlistState('ADD_TRACKS', ...trackLinks);
};
