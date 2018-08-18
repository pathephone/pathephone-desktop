import { connect } from 'react-redux';

import selectors from '#selectors';

import NewReleaseCard from './NewReleaseCard';

const mapStateToProps = (state) => {
  const { name, assets } = selectors.getNewRelease(state);
  return {
    newReleaseName: name,
    newReleaseAssets: assets,
  };
};

export default connect(mapStateToProps)(NewReleaseCard);
