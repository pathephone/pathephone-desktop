import { connect } from 'react-redux'

import {
  isDiscoverSelected
} from '#selectors'

import {
  uiDiscoverPageOpened,
  uiDiscoverPageClosed
} from '~actions/ui'

import DiscoverPage from './DiscoverPage.jsx'

const mapStateToProps = state => {
  const isSelected = isDiscoverSelected(state)
  return {
    hasSelectedActions: isSelected
  }
}

const mapDispatchToProps = {
  onWillMount: uiDiscoverPageOpened,
  onWillUnmount: uiDiscoverPageClosed
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)
