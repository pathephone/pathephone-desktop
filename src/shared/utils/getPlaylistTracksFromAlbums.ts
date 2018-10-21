import { albumsCollectionApi } from '~renderer/api/intex';
import { ICollectionAlbum } from '~renderer/types/api';
import { IMetabinAlbumTrack } from '~shared/types/domains/album';
import { normalizeAlbumTrackForPlaylist } from '~shared/utils/normalizeAlbumTrackForPlaylist';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';

export const getPlaylistTracksFromAlbums: (cids: string[]) => Promise<IPlaylistTrack[]> = async (
  cids: string[]
): Promise<IPlaylistTrack[]> => {
  const docs: ICollectionAlbum[] = await albumsCollectionApi.findAlbumsInCollectionByCids(cids);

  const handleReduce: (acc: IPlaylistTrack[], item: ICollectionAlbum) => IPlaylistTrack[] = (
    acc: IPlaylistTrack[], { data }: ICollectionAlbum
  ): IPlaylistTrack[] => {
    const handleEach: (track: IMetabinAlbumTrack) => void = (
      track: IMetabinAlbumTrack
    ): void => {
      acc.push(normalizeAlbumTrackForPlaylist(track));
    };
    data.tracks.forEach(handleEach);

    return acc;
  };

  return docs.reduce(handleReduce, []);
};
