const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  fallbackLng: {
    default: ['uz'],
  },
};
