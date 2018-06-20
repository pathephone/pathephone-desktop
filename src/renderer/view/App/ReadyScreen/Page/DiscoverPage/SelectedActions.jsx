import React from 'react'
import propTypes from 'prop-types'

import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdDelete from 'react-icons/lib/md/delete'
import MdClear from 'react-icons/lib/md/clear'

import { E2E_DISCOVER_PAGE_SELECTED_BAR_ID, E2E_DISCOVER_PAGE_SELECTED_COUNT_ID, E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID, E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID, E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID } from '~data/e2eConstants'

import CustomButton from '~components/CustomButton.jsx'

import './SelectedActions.css'

class SelectedActions extends React.PureComponent {
  render () {
    const {
      selectedAlbumsCount,
      onPlaySelected,
      onAddSelected,
      onDeleteSelected,
      onCancelSelection
    } = this.props
    return (
      <div
        id={E2E_DISCOVER_PAGE_SELECTED_BAR_ID}
        className='selected-actions izi-fill-width izi--gap izi-x'
      >
        <label
          className='selected-actions__count'
        >
          <span
            id={E2E_DISCOVER_PAGE_SELECTED_COUNT_ID}
          >{selectedAlbumsCount}</span>
          {
            ` album${selectedAlbumsCount > 1 ? 's' : ''} selected`
          }
        </label>
        <CustomButton
          onClick={onPlaySelected}
          id={E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID}
        >
          <MdPlay />
          <small>play</small>
        </CustomButton>
        <CustomButton
          id={E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID}
          onClick={onAddSelected}
        >
          <MdAdd />
          <small>add to playlist</small>
        </CustomButton>
        <CustomButton
          id={E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID}
          onClick={onDeleteSelected}
        >
          <MdDelete />
          <small>delete</small>
        </CustomButton>
        <div className='rightActions'>
          <CustomButton
            onClick={onCancelSelection}
          >
            <MdClear />
          </CustomButton>
        </div>
      </div>
    )
  }
}

SelectedActions.propTypes = {
  selectedAlbumsCount: propTypes.number.isRequired,
  onPlaySelected: propTypes.func.isRequired,
  onAddSelected: propTypes.func.isRequired,
  onDeleteSelected: propTypes.func.isRequired,
  onCancelSelection: propTypes.func.isRequired
}

export default SelectedActions
