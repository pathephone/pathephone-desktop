import * as React from 'react';

import MdDownload from 'react-icons/lib/md/file-download';
import MdUpload from 'react-icons/lib/md/file-upload';
import MdSwap from 'react-icons/lib/md/group-work';
import MdStorage from 'react-icons/lib/md/storage';

import i18n from '~shared/data/i18n';

import { Indicator } from '~renderer/ui/IndicatorsBar/view/IndicatorsBar/Indicator';
import './IndicatorsBar.css';

const resolveIndicatorString: (d: string | null) => string = (
  data: string | null
): string => (
  data === null ? '--' : data
);

interface IProps {
  isOffline: boolean;
  ipfsPeers: string | null;
  metabinPeers: string | null;
  ipfsRepoUsage: string | null;
  ipfsBandwidthIn: string | null;
  ipfsBandwidthOut: string | null;
}

export type IIndicatorsBarProps = IProps;

export const IndicatorsBar: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <div className='indicatorsBar'>
    {
      props.isOffline && (
        <Indicator
          text='offline'
          isAccented
        />
      )
    }
    <Indicator
      Icon={MdSwap}
      text={
        ` ${resolveIndicatorString(props.ipfsPeers)} (${resolveIndicatorString(props.metabinPeers)})`
      }
      tooltip={i18n.PEERS_INDICATOR}
    />
    <Indicator
      Icon={MdStorage}
      text={
        ` ${resolveIndicatorString(props.ipfsRepoUsage)}`
      }
      tooltip={i18n.IPFS_REPO_STAT}
    />
    <Indicator
      Icon={MdDownload}
      text={
        ` ${resolveIndicatorString(props.ipfsBandwidthIn)}`
      }
      tooltip={i18n.BANDWIDTH_IN}
    />
    <Indicator
      Icon={MdUpload}
      text={
        ` ${resolveIndicatorString(props.ipfsBandwidthOut)}`
      }
      tooltip={i18n.BANDWIDTH_OUT}
    />
  </div>
);
