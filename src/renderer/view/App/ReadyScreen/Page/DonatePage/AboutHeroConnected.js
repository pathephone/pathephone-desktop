import { connect } from 'react-redux';

import selectors from '#selectors';

import AboutHero from './AboutHero';

const mapStateToProps = state => ({
  hasNewReleaseCard: !!selectors.getNewRelease(state),
});

export default connect(mapStateToProps)(AboutHero);
