import { connect } from 'react-redux';

// import actions from '../actions';
// import events from '../events';
import selectors from '../selectors';
import container from './container';

const mapStateToProps = (state: any) => ({
  progress: selectors.selectProgress(state),
});

const StartScreen = connect(mapStateToProps)(container);

export default StartScreen;
