import { reduxForm } from 'redux-form'

import ShareForm from './ShareForm.jsx'

export default reduxForm({
  form: 'album',
  initialValues: {
    tracks: [
      {
      }
    ]
  }
})(ShareForm)
