import { connect } from 'react-redux';

import {
  getMetabinPeers,
  getIpfsPeers,
  getIpfsIsOffline,
  getIPFSRepoStat,
  getIPFSBandwidthStat,
} from '#selectors';

import IndicatorsBar from './IndicatorsBar';

const mapStateToProps = state => ({
  isOffline: getIpfsIsOffline(state),
  ipfsPeers: getIpfsPeers(state),
  metabinPeers: getMetabinPeers(state),
  ipfsRepoStat: getIPFSRepoStat(state),
  ipfsBandwidthStat: getIPFSBandwidthStat(state),
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
