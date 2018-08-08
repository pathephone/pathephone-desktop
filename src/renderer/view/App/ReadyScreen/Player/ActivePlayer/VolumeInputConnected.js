import { connect } from 'react-redux';

import {
  getVolume,
} from '#selectors';

import { uiVolumeChanged } from '~actions/ui';

import VolumeInput from './VolumeInput';

const mapStateToProps = state => ({
  currentVolume: getVolume(state),
});

const mapDispatchToProps = {
  onVolumeChange: uiVolumeChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeInput);
