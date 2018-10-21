
import { IMetabinAlbumTrack } from '~shared/types/domains/album';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';

export const normalizeAlbumTrackForPlaylist: (t: IMetabinAlbumTrack) => IPlaylistTrack = (
  { title, artist, audio }: IMetabinAlbumTrack
): IPlaylistTrack => ({
  title, artist, audio
});
