import ipc from '~shared/data/ipc';
import { IMetabinAlbum, IMetabinAlbumTrack } from '~shared/types/domains/album';
import { rendererCalls } from '~shared/utils/ipcRenderer';

export const getAlbumCandidatesFromFs: (i: string[]) => Promise<IMetabinAlbum[]> = async (
  items: string[]
): Promise<IMetabinAlbum[]> => rendererCalls(ipc.GET_ALBUM_CANDIDATES_FROM_FS_ITEMS, items);

export const getTracksFromFsFiles: (t: string[]) => Promise<IMetabinAlbumTrack[]> = (
  tracks: string[]
): Promise<IMetabinAlbumTrack[]> => rendererCalls(ipc.GET_TRACKS_FROM_FS_FILES, tracks);
