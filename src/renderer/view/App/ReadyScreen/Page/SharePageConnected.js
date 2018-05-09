import { connect } from 'react-redux'

import SharePage from './SharePage.jsx'

import { uiAlbumFormSubmited } from '#actions-ui'

const mapDispatchToProps = {
  onFormSubmit: uiAlbumFormSubmited
}

export default connect(null, mapDispatchToProps)(SharePage)
