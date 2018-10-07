import React from 'react';

import { IGithubReleaseAsset } from '~renderer/types/api';
import { AssetsButtons } from '~renderer/ui/DonatePage/view/NewReleaseCard/AssetsButtons';
import i18n from '~shared/data/i18n';
import './NewReleaseCard.css';

interface IProps {
  newReleaseName: string;
  newReleaseAssets: IGithubReleaseAsset[];
}

export const NewReleaseCard: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => {
  return (
    <div className='newReleaseCardContainer'>
      <h4 className='newReleaseCardTitle'>
        {i18n.NEW_VERSION_AVAILABLE}
      </h4>
      <h5>
        {props.newReleaseName}
      </h5>
      <hr />
      <AssetsButtons {...props} />
      <br />
      <a
        className='githubReleaseLink' href='https://github.com/pathephone/pathephone-desktop/releases/latest'
      >
        <small>
          {i18n.AVAILABLE_FOR_OS}
        </small>
      </a>
    </div>
  );
};
