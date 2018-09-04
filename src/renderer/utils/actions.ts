import { newCreatorFactory, newDomainTypeFactory } from '~shared/utils/reduxTools';

const uiDomain = newDomainTypeFactory('ui');

const systemDomain = newDomainTypeFactory('system');

export const uiAction = newCreatorFactory(uiDomain);

export const systemAction = newCreatorFactory(systemDomain);
