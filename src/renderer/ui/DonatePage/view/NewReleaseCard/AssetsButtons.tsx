import React from 'react';

import { IGithubReleaseAsset } from '~renderer/types/api';
import { AssetDownloadButton } from '~renderer/ui/DonatePage/view/AssetsButtons/AssetDownloadButton';
import getTargetReleaseAsset from '~shared/utils/getTargetReleaseAsset';
import './AssetsButtons.css';

const getAssetExtension: (n: string) => string = (
  name: string
): string => {
  const splitedName: string[] = name.split('.');

  return splitedName[splitedName.length - 1];
};

interface IProps {
  newReleaseAssets: IGithubReleaseAsset[];
}

export const AssetsButtons: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => {
  const targetAssets: IGithubReleaseAsset[] = getTargetReleaseAsset(props.newReleaseAssets);

  return (
    <div className='releaseButtonsRow'>
      {
        targetAssets.length === 0 ? (
          <AssetDownloadButton
            downloadURL='https://github.com/pathephone/pathephone-desktop/releases/latest'
            assetName='get latest release'
          />
        ) : targetAssets.map((asset: IGithubReleaseAsset) => (
          <AssetDownloadButton
            key={asset.browser_download_url}
            assetName={getAssetExtension(asset.name)}
            downloadURL={asset.browser_download_url}
          />
        ))
      }
    </div>
  );
};
