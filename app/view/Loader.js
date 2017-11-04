import React, { PropTypes } from 'react'
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'
import loaderState from '../state/loader'
import bind from '../utils/recallReact'

const Loader = ({ loader }) => (
  <Dimmer active={loader.on}>
    <SemanticLoader />
  </Dimmer>
)

Loader.propTypes = {
  loader: PropTypes.object.isRequired
}

export default bind({ loader: loaderState }, Loader)
