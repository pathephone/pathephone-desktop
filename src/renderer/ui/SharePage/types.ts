
export interface IShareFormTrack {
  audio: string;
  title?: string;
  artist?: string;
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

export interface IShareFormValidation {
  [x: string]: string;
}
