import { connect } from 'react-redux'

import AddAlbumPage from './AddAlbumPage.jsx'

import { uiAlbumFormSubmited } from '#actions-ui'

const mapDispatchToProps = {
  onFormSubmit: uiAlbumFormSubmited
}

export default connect(null, mapDispatchToProps)(AddAlbumPage)
