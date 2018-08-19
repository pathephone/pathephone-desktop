import { connect } from 'react-redux';

import selectors from '#selectors';

import Player from './Player';

const mapStateToProps = state => ({
  isActive: selectors.isPlayerActive(state),
});

export default connect(mapStateToProps)(Player);
