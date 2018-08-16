import React from 'react';
import propTypes from 'prop-types';

import MdPlay from 'react-icons/lib/md/play-arrow';
import MdAdd from 'react-icons/lib/md/playlist-add';
import MdDelete from 'react-icons/lib/md/delete';
import MdClear from 'react-icons/lib/md/clear';

import {
  ids, i18n,
} from '~data';

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
        id={ids.DISCOVER_PAGE_SELECTED_BAR_ID}
        className="selectedActions"
      >
        <div
          className="selectedActionsCount"
        >
          <span
            id={ids.DISCOVER_PAGE_SELECTED_COUNT_ID}
          >
            {`${i18n.ALBUMS_SELECTED}: ${selectedAlbumsCount}`}
          </span>
        </div>
        <CustomButton
          onClick={onPlaySelected}
          id={ids.DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID}
        >
          <MdPlay />
          {' '}
          <small>
            {i18n.PLAY}
          </small>
        </CustomButton>
        <CustomButton
          id={ids.DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID}
          onClick={onAddSelected}
        >
          <MdAdd />
          {' '}
          <small>
            {i18n.QUEUE}
          </small>
        </CustomButton>
        <CustomButton
          id={ids.DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID}
          onClick={onDeleteSelected}
        >
          <MdDelete />
          {' '}
          <small>
            {i18n.DELETE}
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
