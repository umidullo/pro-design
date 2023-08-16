const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'uz', 'en'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  fallbackLng: {
    default: ['ru'],
  },
};
