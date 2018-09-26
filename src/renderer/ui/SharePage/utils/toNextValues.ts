import dotProp from 'dot-prop-immutable';
import { ChangeEvent } from 'react';

import { IShareFormTrack, IShareFormValues } from '~renderer/ui/SharePage/types';

type IMutation = (v: IShareFormValues, e: ChangeEvent<HTMLInputElement>) => IShareFormValues;

const applyCoverMutation: IMutation = (
  values: IShareFormValues, e: ChangeEvent<HTMLInputElement>
): IShareFormValues => {
  const { files } = e.currentTarget;
  if (files && files[0] && files[0].type.startsWith('image/')) {
    return dotProp.set(values, name, files[0].path);
  }

  return values;
};

const applyTracksMutation: IMutation = (
  values: IShareFormValues, e: ChangeEvent<HTMLInputElement>
): IShareFormValues => {
  const { files } = e.currentTarget;
  if (files && files.length > 0) {
    const newTracks: IShareFormTrack[] = Array.from(files)
      .map((file: File) => ({ audio: file.path }));
    e.target.value = '';

    return dotProp.set(values, name, [...values.tracks, ...newTracks]);
  }

  return values;
};

const applyDefaultMutation: IMutation = (
  values: IShareFormValues, e: ChangeEvent<HTMLInputElement>
): IShareFormValues => {
  const { name, value } = e.currentTarget;
  if (name) {
    return dotProp.set(values, name, value);
  }

  return values;
};

export const toNextValues: IMutation = (
  values: IShareFormValues, e: ChangeEvent<HTMLInputElement>
): IShareFormValues => {
  switch (name) {
    case 'cover.image':
      return applyCoverMutation(values, e);
    case 'tracks':
      return applyTracksMutation(values, e);
    default:
      return applyDefaultMutation(values, e);
  }
};
