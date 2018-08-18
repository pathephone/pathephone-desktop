import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import VolumeInput from './VolumeInput';

const mapStateToProps = state => ({
  currentVolume: selectors.getVolume(state),
});

const mapDispatchToProps = {
  onVolumeChange: actions.uiVolumeChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeInput);
