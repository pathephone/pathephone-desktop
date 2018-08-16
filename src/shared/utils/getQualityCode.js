import {
  QUALITY_LABEL_LOW,
  QUALITY_LABEL_HIGH,
  QUALITY_LABEL_LOSSLESS,
} from '~data/constants';

const getQualityCode = (bitrate) => {
  if (bitrate < 256) {
    return QUALITY_LABEL_LOW;
  } if (bitrate < 500) {
    return QUALITY_LABEL_HIGH;
  }
  return QUALITY_LABEL_LOSSLESS;
};

export default getQualityCode;
