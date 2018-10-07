import { IMetabinAlbum } from '~shared/types/domains/album';

// Collection

export type ICollectionAlbum = {
  data: IMetabinAlbum;
  cid: string;
};

export interface ICollectionStat {
  albumsCount: number;
  latestCid?: string;
}

// IPFS

export interface IIpfsInfo {
  gateway: string;
  apiEndpoint: string;
}

export interface IIpfsStat {
  peersCount: number;
  repoStat: {
    repoSize: number;
    storageMax: number;
  };
  bandwidthStat: {
    totalIn: number;
    totalOut: number;
  };
}

// GitHub

export interface IGithubRelease {
  prerelease: boolean;
  assets: IGithubReleaseAsset[];
  body: string;
  name: string;
  tag_name: string;
  id: number;
  created_at: string;
  published_at: string;
  draft: boolean;
}

export interface IGithubReleaseAsset {
  'url': string;
  'id': number;
  'node_id': string;
  'name': string;
  'label': string;
  'content_type': string;
  'state': string;
  'size': number;
  'download_count': number;
  'created_at': string;
  'updated_at': string;
  'browser_download_url': string;
}
