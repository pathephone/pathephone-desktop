import { connect } from 'react-redux'

import {
  getDiscoverSelectedCount
} from '#selectors'

import {
  uiDiscoverSelectedCanceled,
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedQueued,
  uiDiscoverSelectedPlayed
} from '~actions/ui'

import SelectedActions from './SelectedActions.jsx'

const mapStateToProps = state => ({
  selectedAlbumsCount: getDiscoverSelectedCount(state)
})

const mapDispatchToProps = {
  onCancelSelection: uiDiscoverSelectedCanceled,
  onPlaySelected: uiDiscoverSelectedPlayed,
  onAddSelected: uiDiscoverSelectedQueued,
  onDeleteSelected: uiDiscoverSelectedDeleted
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedActions)
