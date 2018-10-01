
export interface IMetabinAlbumTrack {
  trackTitle: string;
  trackArtist: string;
  trackAudio: string;
}

export interface IMetabinAlbum {
  albumTitle: string;
  albumCover: string;
  albumTracklist: IMetabinAlbumTrack[];
}
