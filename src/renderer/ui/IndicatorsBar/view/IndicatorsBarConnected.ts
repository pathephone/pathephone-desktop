import { connect, MapStateToProps, MergeProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { IIndicatorsBarProps, IndicatorsBar } from './IndicatorsBar';

interface IStateProps {
  isOffline: boolean;
  ipfsPeers: string | null;
  metabinPeers: string | null;
  ipfsRepoStat: {
    used: string;
    limit: string;
  } | null;
  ipfsBandwidthStat: {
    // tslint:disable no-reserved-keywords
    in: string;
    out: string;
  } | null;
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
    ipfsRepoStat !== null ? `${ipfsRepoStat.used} / ${ipfsRepoStat.limit}` : null
  ),
  ipfsBandwidthIn: (
    ipfsBandwidthStat ? ipfsBandwidthStat.in : null
  ),
  ipfsBandwidthOut: (
    ipfsBandwidthStat ? ipfsBandwidthStat.out : null
  )
});

export const IndicatorsBarsConnected: React.ComponentClass = (
  connect(mapStateToProps, void 0, mergeProps)(IndicatorsBar)
);
