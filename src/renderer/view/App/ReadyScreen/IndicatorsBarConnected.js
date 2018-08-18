import { connect } from 'react-redux';

import selectors from '#selectors';

import IndicatorsBar from './IndicatorsBar';

const mapStateToProps = state => ({
  isOffline: selectors.getIpfsIsOffline(state),
  ipfsPeers: selectors.getIpfsPeers(state),
  metabinPeers: selectors.getMetabinPeers(state),
  ipfsRepoStat: selectors.getIPFSRepoStat(state),
  ipfsBandwidthStat: selectors.getIPFSBandwidthStat(state),
});

const mergeProps = ({ ipfsRepoStat, ipfsBandwidthStat, ...restProps }) => ({
  ...restProps,
  ipfsRepoUsage: (
    ipfsRepoStat !== null ? `${ipfsRepoStat.used} / ${ipfsRepoStat.limit}` : null
  ),
  ipfsBandwidthIn: (
    ipfsBandwidthStat && ipfsBandwidthStat.in
  ),
  ipfsBandwidthOut: (
    ipfsBandwidthStat && ipfsBandwidthStat.out
  ),
});

export default connect(mapStateToProps, null, mergeProps)(IndicatorsBar);
