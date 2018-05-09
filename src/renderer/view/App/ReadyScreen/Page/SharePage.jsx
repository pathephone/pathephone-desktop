import React from 'react'
import propTypes from 'prop-types'

import FormAlbumConnected from './SharePage/FormAlbumConnected'
import Tips from './SharePage/Tips.jsx'

const SharePage = (props) => {
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

SharePage.propTypes = {
  onFormSubmit: propTypes.func.isRequired
}

export default SharePage
