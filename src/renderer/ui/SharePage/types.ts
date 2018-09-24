
export interface IShareFormTrack {
  title: string;
  artist: string;
}

export interface IShareFormCover {
  image: string;
}

export interface IShareFormValues {
  title: string;
  artist: string;
  cover: IShareFormCover;
  tracks: IShareFormTrack[];
}
