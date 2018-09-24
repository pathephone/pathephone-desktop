import React from 'react';
import MdDrop from 'react-icons/lib/md/arrow-downward';

import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

import DNDarea from '~components/DNDarea';

import './ShareDropZone.css';

interface IProps {
  onFilesSelect(f: FileList): void;
}

export const ShareDropZone: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <DNDarea id={e2e.SHARE_DROP_ZONE_ID} multiple onChange={props.onFilesSelect}>
    <div className='shareDropZoneContainer'>
      <MdDrop className='shareDropZoneIcon animated infinite bounce' />
      <br />
      <div className='shareDropZoneText'>
        {i18n.SELECT_OR_DND}
      </div>
    </div>
  </DNDarea>
);
