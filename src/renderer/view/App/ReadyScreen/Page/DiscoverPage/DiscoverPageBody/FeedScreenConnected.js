import { connect } from 'react-redux'

import {
  getDiscoverAlbumsIds,
  getDiscoverSearchValue
} from '#selectors'

import FeedScreen from './FeedScreen.jsx'

const mapStateToProps = state => {
  const searchValue = getDiscoverSearchValue(state)
  let title
  if (searchValue) {
    title = `Search results for "${searchValue}"`
  } else {
    title = 'Latest albums'
  }
  return {
    albumsIds: getDiscoverAlbumsIds(state),
    title
  }
}

export default connect(mapStateToProps)(FeedScreen)
