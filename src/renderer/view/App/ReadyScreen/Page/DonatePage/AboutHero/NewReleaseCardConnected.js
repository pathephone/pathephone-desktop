import { connect } from 'react-redux';

import { getNewRelease } from '#selectors';

import NewReleaseCard from './NewReleaseCard';

const mapStateToProps = (state) => {
  const { name, assets } = getNewRelease(state);
  return {
    newReleaseName: name,
    newReleaseAssets: assets,
  };
};

export default connect(mapStateToProps)(NewReleaseCard);
