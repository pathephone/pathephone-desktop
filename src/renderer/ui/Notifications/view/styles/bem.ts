import { default as BEM } from 'react-bem-helper';

const classes = new BEM('notifications');

export const wrapper = classes('wrapper').className;

export const toast = classes('toast').className;
export const toastSuccess = classes('toast', 'success').className;
export const toastWarning = classes('toast', 'warning').className;
export const toastError = classes('toast', 'error').className;
