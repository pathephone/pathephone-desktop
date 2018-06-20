import { connect } from 'react-redux'

import {
  getPlaylistRemovedByIndex
} from '#selectors'

import PlaylistTrackContainer from './PlaylistTrackContainer.jsx'

const mapStateToProps = (_, ownProps) => {
  return (state) => ({
    isRemoved: !!getPlaylistRemovedByIndex(state)[ownProps.index]
  })
}

export default connect(mapStateToProps)(PlaylistTrackContainer)
