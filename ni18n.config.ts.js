const path = require('path');
const supportedLngs = ['en', 'es'];
import themeConfig from 'theme.config';
export const ni18nConfig = {
    fallbackLng: [themeConfig.locale || 'en'],
    supportedLngs,
    ns: ['translation'],
    react: { useSuspense: false },
    backend: {
        // loadPath: path.resolve(`/locales/{{lng}}.json`),
        backendOptions: [{
          loadPath: path.resolve(`/locales/{{lng}}.json`)
        }]

    },
};
