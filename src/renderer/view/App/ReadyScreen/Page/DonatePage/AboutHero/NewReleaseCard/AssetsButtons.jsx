
import React from 'react';
import propTypes from 'prop-types';

import getTargetReleaseAsset from '~shared/utils/getTargetReleaseAsset';

import AssetDownloadButton from './AssetsButtons/AssetDownloadButton';

import './AssetsButtons.css';

const getAssetExtension = ({ name }) => {
  const splitedName = name.split('.');
  return splitedName[splitedName.length - 1];
};

const AssetsButtons = ({ newReleaseAssets }) => {
  const targetAssets = getTargetReleaseAsset(newReleaseAssets);
  return (
    <div className="releaseButtonsRow">
      {
        targetAssets.length === 0 ? (
          <AssetDownloadButton
            downloadURL="https://github.com/pathephone/pathephone-desktop/releases/latest"
            assetName="get latest release"
          />
        ) : targetAssets.map(asset => (
          <AssetDownloadButton
            key={asset.browser_download_url}
            assetName={getAssetExtension(asset)}
            downloadURL={asset.browser_download_url}
          />
        ))
      }
    </div>
  );
};

AssetsButtons.propTypes = {
  newReleaseAssets: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default AssetsButtons;
