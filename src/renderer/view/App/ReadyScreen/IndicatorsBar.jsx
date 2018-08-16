import React from 'react';
import propTypes from 'prop-types';
import MdSwap from 'react-icons/lib/md/group-work';
import MdUpload from 'react-icons/lib/md/file-upload';
import MdDownload from 'react-icons/lib/md/file-download';
import MdStorage from 'react-icons/lib/md/storage';

import {
  i18n
} from '~data';

import Indicator from './IndicatorsBar/Indicator';

import './IndicatorsBar.css';

const resolveIndicatorString = data => (
  data === null ? '--' : data
);

const IndicatorsBar = ({
  isOffline,
  ipfsPeers,
  metabinPeers,
  ipfsRepoUsage,
  ipfsBandwidthIn,
  ipfsBandwidthOut,
}) => (
  <div className="indicatorsBar">
    {
        isOffline && (
          <Indicator
            text="offline"
            isAccented
          />
        )
      }
    <Indicator
      Icon={MdSwap}
      text={
          ` ${resolveIndicatorString(ipfsPeers)} (${resolveIndicatorString(metabinPeers)})`
        }
      tooltip={i18n.PEERS_INDICATOR}
    />
    <Indicator
      Icon={MdStorage}
      text={
          ` ${resolveIndicatorString(ipfsRepoUsage)}`
        }
      tooltip={i18n.IPFS_REPO_STAT}
    />
    <Indicator
      Icon={MdDownload}
      text={
          ` ${resolveIndicatorString(ipfsBandwidthIn)}`
        }
      tooltip={i18n.BANDWIDTH_IN}
    />
    <Indicator
      Icon={MdUpload}
      text={
          ` ${resolveIndicatorString(ipfsBandwidthOut)}`
        }
      tooltip={i18n.BANDWIDTH_OUT}
    />
  </div>
);

IndicatorsBar.defaultProps = {
  ipfsPeers: null,
  metabinPeers: null,
  ipfsRepoUsage: null,
  ipfsBandwidthIn: null,
  ipfsBandwidthOut: null,
};

IndicatorsBar.propTypes = {
  isOffline: propTypes.bool.isRequired,
  ipfsPeers: propTypes.number,
  metabinPeers: propTypes.number,
  ipfsRepoUsage: propTypes.string,
  ipfsBandwidthIn: propTypes.string,
  ipfsBandwidthOut: propTypes.string,
};

export default IndicatorsBar;
