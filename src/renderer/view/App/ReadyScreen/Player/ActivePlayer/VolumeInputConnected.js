import { connect } from 'react-redux';

import {
  getVolume,
} from '#selectors';

import actions from '#actions';

import VolumeInput from './VolumeInput';

const mapStateToProps = state => ({
  currentVolume: getVolume(state),
});

const mapDispatchToProps = {
  onVolumeChange: actions.uiVolumeChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeInput);
