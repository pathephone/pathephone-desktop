import { connect } from 'react-redux';

import { startScreenSelectors } from '.';
import view from './view';

const mapStateToProps = (state: any) => ({
  progress: startScreenSelectors.selectProgress(state),
});

const StartScreenConnected = connect(mapStateToProps)(view);

export default StartScreenConnected;
