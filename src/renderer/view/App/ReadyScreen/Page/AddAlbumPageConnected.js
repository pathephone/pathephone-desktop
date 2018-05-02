import { connect } from 'react-redux'

import AddAlbumPage from './AddAlbumPage.jsx'

import { reportAlbumFormSubmit } from '#actions'

const mapDispatchToProps = {
  onFormSubmit: reportAlbumFormSubmit
}

export default connect(null, mapDispatchToProps)(AddAlbumPage)
