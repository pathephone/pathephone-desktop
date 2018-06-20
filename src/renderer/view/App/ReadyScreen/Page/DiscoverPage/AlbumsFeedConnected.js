import { connect } from 'react-redux'

import {
  getFeedAlbums
} from '#selectors'

import AlbumsFeed from './AlbumsFeed.jsx'

const mapStateToProps = state => {
  const albums = getFeedAlbums(state)
  return {
    albums
  }
}

export default connect(mapStateToProps)(AlbumsFeed)
