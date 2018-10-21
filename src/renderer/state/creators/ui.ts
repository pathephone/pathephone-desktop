import { newCreatorFactory, newDomainTypeFactory } from '~shared/utils/reduxTools';

const c = newCreatorFactory(newDomainTypeFactory('ui'));

export const uiLegalAgreementGranted = c('LEGAL_AGREEMENT_GRANTED');
