import { connect } from 'react-redux'

import {
  getDiscoverAlbumsIds, isDiscoverSearchPerformed
} from '#selectors'

import FeedScreen from './FeedScreen.jsx'

const mapStateToProps = state => {
  const searchPerformed = isDiscoverSearchPerformed(state)
  let title
  if (searchPerformed) {
    title = 'Search results'
  } else {
    title = 'Latest albums'
  }
  return {
    albumsIds: getDiscoverAlbumsIds(state),
    title
  }
}

export default connect(mapStateToProps)(FeedScreen)
