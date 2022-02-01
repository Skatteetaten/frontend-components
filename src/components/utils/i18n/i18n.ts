import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages as languageFile } from './languages';

export const omstrukturerFlatJSON = (data) => {
  if (Object(data) !== data || Array.isArray(data)) return data;
  /* eslint-disable prefer-const */
  let result = {},
    cur,
    prop,
    idx,
    last,
    temp;
  for (const p in data) {
    cur = result;
    prop = '';
    last = 0;
    do {
      idx = p.indexOf('.', last);
      temp = p.substring(last, idx !== -1 ? idx : undefined);
      cur = cur[prop] || (cur[prop] = !isNaN(parseInt(temp)) ? [] : {});
      prop = temp;
      last = idx + 1;
    } while (idx >= 0);
    cur[prop] = data[p];
  }
  return result[''];
};
const en = omstrukturerFlatJSON(languageFile.en_GB);
const nb = omstrukturerFlatJSON(languageFile.nb_NO);
const nn = omstrukturerFlatJSON(languageFile.nn_NO);
const se = omstrukturerFlatJSON(languageFile.se_NO);

i18n.use(initReactI18next).init({
  lng: 'nb',
  fallbackLng: 'nb',
  debug: false,
  ns: ['ns.translate'],
  defaultNS: 'ns.translate',
  interpolation: {
    // escapeValue not needed for react as it escapes by default
    escapeValue: false,
  },
});

const languages = { nb, nn, en, se };

Object.keys(languages).forEach((language) => {
  i18n.addResourceBundle(language, 'ns.translate', languages[language], true);
});

export default i18n;
export const t = (tekst) => {
  return i18n.t(tekst);
};
