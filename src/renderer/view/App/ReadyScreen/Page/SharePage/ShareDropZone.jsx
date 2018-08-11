import React from 'react';
import propTypes from 'prop-types';
import MdDrop from 'react-icons/lib/md/arrow-downward';

import { E2E_SHARE_DROP_ZONE_ID } from '~data/e2eConstants';
import { LOCAL_SELECT_OR_DND } from '~data/i18nConstants';

import DNDarea from '~components/DNDarea';

import './ShareDropZone.css';

const ShareDropZone = ({ onFilesSelect }) => (
  <DNDarea id={E2E_SHARE_DROP_ZONE_ID} multiple onChange={onFilesSelect}>
    <div className="shareDropZoneContainer">
      <MdDrop className="shareDropZoneIcon animated infinite bounce" />
      <br />
      <label className="shareDropZoneText">
        {LOCAL_SELECT_OR_DND}
      </label>
    </div>
  </DNDarea>
);

ShareDropZone.propTypes = {
  onFilesSelect: propTypes.func.isRequired,
};

export default ShareDropZone;
