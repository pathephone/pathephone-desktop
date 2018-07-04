import { connect } from 'react-redux'

import {
  getDiscoverAlbumsIds,
  getDiscoverSearchValue,
  isDiscoverAlbumsOutdated
} from '#selectors'

import FeedScreen from './FeedScreen.jsx'
import { systemDiscoverAlbumsFetch } from '~actions/system'

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
  onRefreshButtonClick: systemDiscoverAlbumsFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
