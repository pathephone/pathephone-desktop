import React from 'react'
import propTypes from 'prop-types'

import ProcessingScreen from '~components/ProcessingScreen.jsx'

import NoAlbumsScreen from './DiscoverPageBody/NoAlbumsScreen.jsx'
import NoSearchResultsScreen from './DiscoverPageBody/NoSearchResultsScreen.jsx'
import FeedScreenConnected from './DiscoverPageBody/FeedScreenConnected'

import './DiscoverPageBody.css'

class DiscoverPageBody extends React.Component {
  componentWillMount = this.props.onWillMount
  componentWillUnmount = this.props.onWillUnmount

  render () {
    const {
      hasNoAlbumsScreen,
      hasNoSearchResultsScreen,
      hasFeedScreen,
      hasProcessingScreen
    } = this.props
    return (
      <div
        className='albums-page__body'
      >
        {
          hasNoAlbumsScreen && (
            <NoAlbumsScreen />
          )
        }
        {
          hasNoSearchResultsScreen && (
            <NoSearchResultsScreen />
          )
        }
        {
          hasProcessingScreen && (
            <ProcessingScreen />
          )
        }
        {
          hasFeedScreen && (
            <FeedScreenConnected />
          )
        }
      </div>
    )
  }
}

DiscoverPageBody.propTypes = {
  hasNoAlbumsScreen: propTypes.bool.isRequired,
  hasNoSearchResultsScreen: propTypes.bool.isRequired,
  hasFeedScreen: propTypes.bool.isRequired,
  hasProcessingScreen: propTypes.bool.isRequired,
  onWillMount: propTypes.func,
  onWillUnmount: propTypes.func
}

export default DiscoverPageBody
