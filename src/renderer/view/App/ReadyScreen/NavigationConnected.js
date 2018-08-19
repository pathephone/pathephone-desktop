import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import selectors from '#selectors';

import Navigation from './Navigation';

const mapStateToProps = state => ({
  hasUpdateIndicator: !!selectors.getNewRelease(state),
});

export default withRouter(connect(mapStateToProps)(Navigation));
