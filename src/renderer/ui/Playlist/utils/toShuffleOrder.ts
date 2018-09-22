import { IPlaylistTrack, IPlaylistTracksByIndex } from '~renderer/ui/Playlist/types';

export const toTracksByIndex: (t: IPlaylistTrack[], i?: string | null) => IPlaylistTracksByIndex = (
  (tracks: IPlaylistTrack[], startIndex: string | null) : IPlaylistTracksByIndex => {
    let lastTrackIndex: number = startIndex ? Number(startIndex) : -1;

    return tracks.reduce(
      (acc: IPlaylistTracksByIndex, { audio, title, artist }: IPlaylistTrack) => {
        lastTrackIndex += 1;
        acc[lastTrackIndex] = {
          audio, title, artist
        };

        return acc;
      },
      {}
    );
  }
);
