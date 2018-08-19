import React from 'react';
import propTypes from 'prop-types';
import MdDownload from 'react-icons/lib/md/file-download';

import getCurrentOSIcon from '~shared/utils/getCurrentOSIcon';

import './AssetDownloadButton.css';

let Icon = getCurrentOSIcon();

if (!Icon) {
  Icon = MdDownload;
}

const AssetDownloadButton = ({ downloadURL, assetName }) => (
  <a
    className="assetDownloadButton"
    href={downloadURL}
  >
    <Icon />
    {' '}
    <b>
      {assetName}
    </b>
  </a>
);

AssetDownloadButton.propTypes = {
  downloadURL: propTypes.string.isRequired,
  assetName: propTypes.string.isRequired,
};

export default AssetDownloadButton;
