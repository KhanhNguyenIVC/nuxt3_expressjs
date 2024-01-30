export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    locales: [
        {
            code: 'en',
            domain: 'mydomain.com'
        },
        {
            code: 'es',
            domain: 'es.mydomain.com'
        },
        {
            code: 'fr',
            domain: 'fr.mydomain.com'
        },
        {
            code: 'pl',
            domain: 'http://pl.mydomain.com'
        },
        {
            code: 'ua',
            domain: 'https://ua.mydomain.com'
        }
    ],
    differentDomains: true,
    messages: {
        en: {
            welcome: 'Welcome',
            hello: 'Hi',
            header_title: 'Header_en'
        },
        fr: {
            welcome: 'Bienvenue',
            hello: 'bonjua',
            header_title: 'Header_fr'
        }
    },
}))