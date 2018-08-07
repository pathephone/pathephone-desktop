import { connect } from 'react-redux';

import { getNewRelease } from '#selectors';

import AboutHero from './AboutHero.jsx';

const mapStateToProps = state => ({
  hasNewReleaseCard: !!getNewRelease(state),
});

export default connect(mapStateToProps)(AboutHero);
