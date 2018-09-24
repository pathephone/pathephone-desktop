import dotProp from 'dot-prop-immutable';
import { ChangeEvent } from 'react';

import { IShareFormTrack, IShareFormValues } from '~renderer/ui/SharePage/types';

type IToNextValues = (v: IShareFormValues, e: ChangeEvent<HTMLInputElement>) => IShareFormValues;

export const toNextValues: IToNextValues = (
  values: IShareFormValues, e: ChangeEvent<HTMLInputElement>
): IShareFormValues => {
  const { name, value, files } = e.currentTarget;
  let nextValue: string | IShareFormTrack[] | undefined;
  switch (name) {
    case 'cover.image': {
      if (files && files[0] && files[0].type.startsWith('image/')) {
        nextValue = files[0].path;
      }
      break;
    }
    case 'tracks': {
      if (files && files.length > 0) {
        const newTracks: IShareFormTrack[] = Array.from(files)
          .map(file => ({ audio: file.path }));
        nextValue = [...values.tracks, ...newTracks];
        e.target.value = '';
      }
      break;
    }
    default:
      nextValue = value;
  }
  if (typeof nextValue !== 'undefined') {
    return dotProp.set(values, name, nextValue);
  }
  return undefined;
};
