import { connect } from 'react-redux';

import { select } from './state';
import view from './view';

const mapStateToProps = (state) => ({
  progress: select.selectProgress(state),
});

const StartScreenConnected = connect(mapStateToProps)(view);

export default StartScreenConnected;
