import { IAlbumsInfoState } from '~renderer/state/domains/albumsInfo';
import { IAudioState } from '~renderer/state/domains/audio';
import { ICachedCIDsState } from '~renderer/state/domains/cachedCIDs';
import { IDiscoverPageState } from '~renderer/state/domains/discoverPage';
import { IDiscoverSelectedState } from '~renderer/state/domains/discoverSelected';
import { IIpfsInfoState } from '~renderer/state/domains/ipfsInfo';
import { ILegalAgreementState } from '~renderer/state/domains/legalAgreement';
import { INewReleaseState } from '~renderer/state/domains/newRelease';
import { IShareState } from '~renderer/state/domains/share';
import { IVolumeState } from '~renderer/state/domains/volume';
import { IAppState } from '~renderer/ui/App/types';
import { INotificationsState } from '~renderer/ui/Notifications/types';
import { IPlaylistState } from '~renderer/ui/Playlist/types';

export interface IRootState {
  notifications: INotificationsState;
  app: IAppState;
  playlist: IPlaylistState;
  volume: IVolumeState;
  share: IShareState;
  newRelease: INewReleaseState;
  legalAgreement: ILegalAgreementState;
  ipfsInfo: IIpfsInfoState;
  discoverSelected: IDiscoverSelectedState;
  discoverPage: IDiscoverPageState;
  cachedCIDs: ICachedCIDsState;
  audio: IAudioState;
  albumsInfo: IAlbumsInfoState;
}
