import React from 'react';
import propTypes from 'prop-types';

import { QUALITY_LABEL_HIGH, QUALITY_LABEL_LOSSLESS, QUALITY_LABEL_LOW } from '~data/constants';

import './QualityLabel.css';

const getQualityNameLong = (code) => {
  switch (code) {
    case QUALITY_LABEL_LOSSLESS:
      return 'Lossless quality';
    case QUALITY_LABEL_HIGH:
      return 'High quality';
    case QUALITY_LABEL_LOW:
      return 'Low quality';
    default:
      throw new Error('No valid quality code was provided.');
  }
};

const getQualityNameShort = (code) => {
  switch (code) {
    case QUALITY_LABEL_LOSSLESS:
      return 'LS';
    case QUALITY_LABEL_HIGH:
      return 'HQ';
    case QUALITY_LABEL_LOW:
      return 'LQ';
    default:
      throw new Error('No valid quality code was provided.');
  }
};

const QualityLabel = ({
  qualityCode,
}) => {
  const qualityLabelTitle = getQualityNameLong(qualityCode);
  const qualityLabelContent = getQualityNameShort(qualityCode);
  const className = `quality-label${
    qualityCode === QUALITY_LABEL_LOW
      ? '--low'
      : qualityCode === QUALITY_LABEL_HIGH
        ? '--high'
        : qualityCode === QUALITY_LABEL_LOSSLESS
          && '--lossless'
  }`;
  return (
    <div
      className={className}
      title={qualityLabelTitle}
    >
      {qualityLabelContent}
    </div>
  );
};

QualityLabel.propTypes = {
  qualityCode: propTypes.oneOf(
    [QUALITY_LABEL_LOW, QUALITY_LABEL_HIGH, QUALITY_LABEL_LOSSLESS],
  ).isRequired,
};

export default QualityLabel;
