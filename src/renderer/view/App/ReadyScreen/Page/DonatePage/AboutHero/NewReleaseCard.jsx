
import React from 'react';
import propTypes from 'prop-types';

import {
  LOCAL_NEW_VERSION_AVAILABLE,
  LOCAL_AVAILABLE_FOR_OS,
} from '~data/i18nConstants';

import AssetsButtons from './NewReleaseCard/AssetsButtons';
import './NewReleaseCard.css';

const NewReleaseCard = (props) => {
  const { newReleaseName } = props;
  return (
    <div className="newReleaseCardContainer">
      <h4 className="newReleaseCardTitle">
        {LOCAL_NEW_VERSION_AVAILABLE}
      </h4>
      <h5>
        {newReleaseName}
      </h5>
      <hr />
      <AssetsButtons {...props} />
      <br />
      <a className="githubReleaseLink" href="https://github.com/pathephone/pathephone-desktop/releases/latest">
        <small>
          {LOCAL_AVAILABLE_FOR_OS}
        </small>
      </a>
    </div>
  );
};

NewReleaseCard.propTypes = {
  newReleaseName: propTypes.string.isRequired,
  newReleaseAssets: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default NewReleaseCard;
