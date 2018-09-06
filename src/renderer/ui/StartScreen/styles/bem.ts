import { default as BEM } from 'react-bem-helper';

const classes: BEM<{ className: string }> = new BEM('startScreen');

export const wrapper: string = classes('wrapper').className;

export const progressReady: string = classes('progressReady').className;

export const progressTotal: string = classes('progressTotal').className;

export const error: string = classes('error').className;
