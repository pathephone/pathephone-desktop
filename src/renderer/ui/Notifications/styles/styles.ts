import { default as BEM } from 'react-bem-helper';

const classes: BEM.HelperFunction<{ className: string }> = new BEM('notifications');

export const wrapper: string = classes('wrapper').className;
export const toast: string = classes('toast').className;
export const toastSuccess: string = classes('toast', 'success').className;
export const toastWarning: string = classes('toast', 'warning').className;
export const toastError: string = classes('toast', 'error').className;
