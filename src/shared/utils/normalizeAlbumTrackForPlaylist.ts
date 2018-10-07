
import { IPlaylistTrack } from '~renderer/ui/Playlist/types';
import { IMetabinAlbumTrack } from '~shared/types/domains/album';

export const normalizeAlbumTrackForPlaylist: (t: IMetabinAlbumTrack) => IPlaylistTrack = (
  { title, artist, audio }: IMetabinAlbumTrack
): IPlaylistTrack => ({
  title, artist, audio
});
