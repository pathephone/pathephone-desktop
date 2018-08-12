import React from 'react';
import propTypes from 'prop-types';

import MdPlay from 'react-icons/lib/md/play-arrow';
import MdAdd from 'react-icons/lib/md/playlist-add';
import MdDelete from 'react-icons/lib/md/delete';
import MdClear from 'react-icons/lib/md/clear';

import {
  E2E_DISCOVER_PAGE_SELECTED_BAR_ID,
  E2E_DISCOVER_PAGE_SELECTED_COUNT_ID,
  E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID,
  E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID,
  E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID,
} from '~data/e2eConstants';
import {
  LOCAL_ALBUMS_SELECTED,
  LOCAL_PLAY,
  LOCAL_QUEUE,
  LOCAL_DELETE,
} from '~data/i18nConstants';

import CustomButton from '~components/CustomButton';

import './SelectedActions.css';

class SelectedActions extends React.PureComponent {
  render() {
    const {
      selectedAlbumsCount,
      onPlaySelected,
      onAddSelected,
      onDeleteSelected,
      onCancelSelection,
    } = this.props;
    return (
      <div
        id={E2E_DISCOVER_PAGE_SELECTED_BAR_ID}
        className="selectedActions"
      >
        <div
          className="selectedActionsCount"
        >
          <span
            id={E2E_DISCOVER_PAGE_SELECTED_COUNT_ID}
          >
            {`${LOCAL_ALBUMS_SELECTED}: ${selectedAlbumsCount}`}
          </span>
        </div>
        <CustomButton
          onClick={onPlaySelected}
          id={E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID}
        >
          <MdPlay />
          {' '}
          <small>
            {LOCAL_PLAY}
          </small>
        </CustomButton>
        <CustomButton
          id={E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID}
          onClick={onAddSelected}
        >
          <MdAdd />
          {' '}
          <small>
            {LOCAL_QUEUE}
          </small>
        </CustomButton>
        <CustomButton
          id={E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID}
          onClick={onDeleteSelected}
        >
          <MdDelete />
          {' '}
          <small>
            {LOCAL_DELETE}
          </small>
        </CustomButton>
        <div className="selectedActionsRight">
          <CustomButton
            onClick={onCancelSelection}
          >
            <MdClear />
          </CustomButton>
        </div>
      </div>
    );
  }
}

SelectedActions.propTypes = {
  selectedAlbumsCount: propTypes.number.isRequired,
  onPlaySelected: propTypes.func.isRequired,
  onAddSelected: propTypes.func.isRequired,
  onDeleteSelected: propTypes.func.isRequired,
  onCancelSelection: propTypes.func.isRequired,
};

export default SelectedActions;
