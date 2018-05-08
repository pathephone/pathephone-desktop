import { reduxForm } from 'redux-form'

import FormAlbum from './FormAlbum.jsx'

export default reduxForm({
  form: 'album'
})(FormAlbum)
