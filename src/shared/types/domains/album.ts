
// Metabin

export interface IMetabinAlbumTrack {
  audio: string;
  title: string;
  artist: string;
}

export interface IMetabinAlbumCover {
  image: string;
}

export interface IMetabinAlbum {
  title: string;
  artist: string;
  cover: IMetabinAlbumCover;
  tracks: IMetabinAlbumTrack[];
}
