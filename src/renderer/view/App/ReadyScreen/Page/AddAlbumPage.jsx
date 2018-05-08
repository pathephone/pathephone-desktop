import React from 'react'
import propTypes from 'prop-types'

import FormAlbumConnected from './AddAlbumPage/FormAlbumConnected'
import Tips from './AddAlbumPage/Tips.jsx'

const AddAlbumPage = (props) => {
  const { onFormSubmit } = props
  return (
    <React.Fragment>
      <Tips />
      <FormAlbumConnected
        onSubmit={onFormSubmit}
      />
    </React.Fragment>
  )
}

AddAlbumPage.propTypes = {
  onFormSubmit: propTypes.func.isRequired
}

export default AddAlbumPage
