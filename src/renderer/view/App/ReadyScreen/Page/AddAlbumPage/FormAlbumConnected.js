import { reduxForm } from 'redux-form'

import FormAlbum from './FormAlbum'

export default reduxForm({
  form: 'album'
})(FormAlbum)
