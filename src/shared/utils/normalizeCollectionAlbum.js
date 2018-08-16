const normalizeCollectionAlbum = ({
  cid, data: {
    cover, artist, title,
  },
}) => ({
  albumCid: cid,
  albumArtist: artist,
  albumTitle: title,
  albumCoverCid: cover.image,
});

export default normalizeCollectionAlbum;
