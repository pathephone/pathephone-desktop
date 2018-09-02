import { connect } from 'react-redux';

import { startScreenSelectors } from './state';
import { StartScreenComponent } from './view';

const mapStateToProps = (state: any) => ({
  progress: startScreenSelectors.selectProgress(state),
});

const StartScreenConnected = connect(mapStateToProps)(StartScreenComponent);

export default StartScreenConnected;
