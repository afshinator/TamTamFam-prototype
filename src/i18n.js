import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
i18n
  //  https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'es'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // public/locales/... is the default anyway...
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });
export default i18n;