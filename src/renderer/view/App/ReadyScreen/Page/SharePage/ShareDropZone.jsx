import React from 'react';
import propTypes from 'prop-types';
import MdDrop from 'react-icons/lib/md/arrow-downward';

import { i18n } from '~data';
import e2e from '~data/e2e';

import DNDarea from '~components/DNDarea';

import './ShareDropZone.css';

const ShareDropZone = ({ onFilesSelect }) => (
  <DNDarea id={e2e.SHARE_DROP_ZONE_ID} multiple onChange={onFilesSelect}>
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
