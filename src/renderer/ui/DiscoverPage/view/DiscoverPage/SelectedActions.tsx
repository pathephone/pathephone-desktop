import propTypes from 'prop-types';
import React from 'react';

import MdClear from 'react-icons/lib/md/clear';
import MdDelete from 'react-icons/lib/md/delete';
import MdPlay from 'react-icons/lib/md/play-arrow';
import MdAdd from 'react-icons/lib/md/playlist-add';

import CustomButton from '~components/CustomButton';
import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';
import './SelectedActions.css';

interface IProps {
  selectedAlbumsCount: number;
  onPlaySelected(): void;
  onAddSelected(): void;
  onDeleteSelected(): void;
  onCancelSelection(): void;
}

export class SelectedActions extends React.Component<IProps> {
  public render(): React.ReactElement<IProps> {
    const {
      selectedAlbumsCount,
      onPlaySelected,
      onAddSelected,
      onDeleteSelected,
      onCancelSelection
    } = this.props;

    return (
      <div
        id={e2e.DISCOVER_PAGE_SELECTED_BAR_ID}
        className='selectedActions'
      >
        <div
          className='selectedActionsCount'
        >
          <span
            id={e2e.DISCOVER_PAGE_SELECTED_COUNT_ID}
          >
            {`${i18n.ALBUMS_SELECTED}: ${selectedAlbumsCount}`}
          </span>
        </div>
        <CustomButton
          onClick={onPlaySelected}
          id={e2e.DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID}
        >
          <MdPlay />
          {' '}
          <small>
            {i18n.PLAY}
          </small>
        </CustomButton>
        <CustomButton
          id={e2e.DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID}
          onClick={onAddSelected}
        >
          <MdAdd />
          {' '}
          <small>
            {i18n.QUEUE}
          </small>
        </CustomButton>
        <CustomButton
          id={e2e.DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID}
          onClick={onDeleteSelected}
        >
          <MdDelete />
          {' '}
          <small>
            {i18n.DELETE}
          </small>
        </CustomButton>
        <div className='selectedActionsRight'>
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
