import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getNewRelease } from '#selectors';

import Navigation from './Navigation.jsx';

const mapStateToProps = state => ({
  hasUpdateIndicator: !!getNewRelease(state),
});

export default withRouter(connect(mapStateToProps)(Navigation));
