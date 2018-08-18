
import React from 'react';
import propTypes from 'prop-types';

import i18n from '~shared/data/i18n';

import AssetsButtons from './NewReleaseCard/AssetsButtons';
import './NewReleaseCard.css';

const NewReleaseCard = (props) => {
  const { newReleaseName } = props;
  return (
    <div className="newReleaseCardContainer">
      <h4 className="newReleaseCardTitle">
        {i18n.NEW_VERSION_AVAILABLE}
      </h4>
      <h5>
        {newReleaseName}
      </h5>
      <hr />
      <AssetsButtons {...props} />
      <br />
      <a className="githubReleaseLink" href="https://github.com/pathephone/pathephone-desktop/releases/latest">
        <small>
          {i18n.AVAILABLE_FOR_OS}
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
