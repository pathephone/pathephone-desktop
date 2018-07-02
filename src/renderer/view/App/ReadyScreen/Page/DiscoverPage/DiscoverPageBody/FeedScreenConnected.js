import { connect } from 'react-redux'

import {
  getDiscoverAlbumsIds,
  getDiscoverSearchValue,
  isDiscoverAlbumsOutdated
} from '#selectors'
import { uiDiscoverRefreshButtonClicked } from '~actions/ui'

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
    hasRefreshButton: !searchValue && isDiscoverAlbumsOutdated(state),
    title
  }
}

const mapDispatchToProps = {
  onRefreshButtonClick: uiDiscoverRefreshButtonClicked
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
