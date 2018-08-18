import { IS_PRODUCTION } from '~shared/config';

const getLocaleCode = () => {
  let code = 'en';
  if (IS_PRODUCTION) {
    if (navigator && navigator.language.startsWith('ru')) {
      code = 'ru';
    }
  }
  return code;
};

export default getLocaleCode;
