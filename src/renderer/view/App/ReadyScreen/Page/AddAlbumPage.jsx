import React from 'react'
import propTypes from 'prop-types'

import FormAlbum from './AddAlbumPage/FormAlbum.jsx'
import Tips from './AddAlbumPage/Tips.jsx'

const AddAlbumPage = (props) => {
  const { onFormSubmit } = props
  return (
    <React.Fragment>
      <Tips />
      <FormAlbum
        onSubmit={onFormSubmit}
      />
    </React.Fragment>
  )
}

AddAlbumPage.propTypes = {
  onFormSubmit: propTypes.func.isRequired
}

export default AddAlbumPage
