module.exports = {
    i18n: {
        defaultLocale: 'fa',
        locales: ['en', 'fa'],
        localeDetection: false,
        localePath: typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',
        localeStructure: '{{lng}}/{{ns}}',
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    ns: ['common', 'home', 'footer', 'navbar'],
    defaultNS: 'common',
    fallbackLng: {
        default: ['fa'],
        en: ['en'],
    },
    debug: true,
};