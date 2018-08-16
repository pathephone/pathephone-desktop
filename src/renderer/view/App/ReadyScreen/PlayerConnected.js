import { connect } from 'react-redux';

import Player from './Player';

import {
  isPlayerActive,
} from '#selectors';

const mapStateToProps = state => ({
  isActive: isPlayerActive(state),
});

export default connect(mapStateToProps)(Player);
