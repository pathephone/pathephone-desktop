import { connect, MapStateToProps, MergeProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { IIpfsBandwidthStat, IIpfsRepoStat } from '~renderer/types/api';
import { IIndicatorsBarProps, IndicatorsBar } from './IndicatorsBar';

interface IStateProps {
  isOffline: boolean;
  ipfsPeers: number | null;
  metabinPeers: number | null;
  ipfsRepoStat: IIpfsRepoStat | null;
  ipfsBandwidthStat: IIpfsBandwidthStat | null;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  isOffline: selectors.getIpfsIsOffline(state),
  ipfsPeers: selectors.getIpfsPeers(state),
  metabinPeers: selectors.getMetabinPeers(state),
  ipfsRepoStat: selectors.getIPFSRepoStat(state),
  ipfsBandwidthStat: selectors.getIPFSBandwidthStat(state)
});

type IMergedProps = IIndicatorsBarProps;

const mergeProps: MergeProps<IStateProps, void, {}, IMergedProps> = (
  { ipfsRepoStat, ipfsBandwidthStat, ...restProps }: IStateProps
): IMergedProps => ({
  ...restProps,
  ipfsRepoUsage: (
    ipfsRepoStat !== null ? `${ipfsRepoStat.repoSize} / ${ipfsRepoStat.storageMax}` : null
  ),
  ipfsBandwidthIn: (
    ipfsBandwidthStat ? `${ipfsBandwidthStat.totalIn}` : null
  ),
  ipfsBandwidthOut: (
    ipfsBandwidthStat ? `${ipfsBandwidthStat.totalOut}` : null
  )
});

export const IndicatorsBarsConnected: React.ComponentClass = (
  connect(mapStateToProps, void 0, mergeProps)(IndicatorsBar)
);
