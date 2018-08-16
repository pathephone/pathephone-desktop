import React from 'react';
import propTypes from 'prop-types';
import MdDrop from 'react-icons/lib/md/arrow-downward';

import { ids, i18n } from '~data';

import DNDarea from '~components/DNDarea';

import './ShareDropZone.css';

const ShareDropZone = ({ onFilesSelect }) => (
  <DNDarea id={ids.SHARE_DROP_ZONE_ID} multiple onChange={onFilesSelect}>
    <div className="shareDropZoneContainer">
      <MdDrop className="shareDropZoneIcon animated infinite bounce" />
      <br />
      <div className="shareDropZoneText">
        {i18n.SELECT_OR_DND}
      </div>
    </div>
  </DNDarea>
);

ShareDropZone.propTypes = {
  onFilesSelect: propTypes.func.isRequired,
};

export default ShareDropZone;
