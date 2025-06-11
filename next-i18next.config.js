module.exports = {
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    ns: ['common', 'home', 'footer', 'navbar'],
    defaultNS: 'common',
    fallbackLng: {
        default: ['fa'],
        en: ['en'],
    },
    debug: true,
};