import React from 'react';

import MdDownload from 'react-icons/lib/md/file-download';

import getCurrentOSIcon from '~shared/utils/getCurrentOSIcon';
import './AssetDownloadButton.css';

let ButtonIcon: React.ComponentClass | undefined = getCurrentOSIcon();

if (!ButtonIcon) {
  ButtonIcon = MdDownload;
}

interface IProps {
  downloadURL: string;
  assetName: string;
}

export const AssetDownloadButton: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <a
    className='assetDownloadButton'
    href={props.downloadURL}
  >
    {
      ButtonIcon && (
       <ButtonIcon />
      )
    }
    {' '}
    <b>
      {props.assetName}
    </b>
  </a>
);
