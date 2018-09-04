import { default as BEM } from 'react-bem-helper';

const classes = new BEM('startScreen');

export const wrapper = classes('wrapper').className;

export const progressReady = classes('progressReady').className;

export const progressTotal = classes('progressTotal').className;

export const error = classes('error').className;
