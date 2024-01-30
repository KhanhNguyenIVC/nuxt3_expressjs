import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;'
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      // title: 'Nuxt 3'
      script: [
        // { src: "/js/webfont.js" },
        // { src: "/js/snap.svg-min.js" },
        // { src: "/js/underscore-min.js" },
        // { src: "/js/sequence-diagram-min.js" },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    apiSecret: process.env.SECRECT_API,
    public: {
      // Client side
      apiBaseUrl: process.env.API_BASE_URL ?? 'https://e7bd-14-161-35-142.ngrok-free.app',
      apiPublic: process.env.PUBLIC_API,
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  experimental: {
    clientFallback: true,
    componentIslands: true,
  },
  routeRules: {
    '/old-page': { redirect: '/state' },
    // '/island' : {ssr : false} // only on client-side
    // '/blog/**': { swr: true },
    // '/blog/**': { swr: 600 },
    // '/blog/**': { static: true },
    // '/blog/**': { cache: { /* cache options*/ } },
    // '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
    // '/api/v1/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
    // '/old-page': { redirect: '/new-page' },
    // '/proxy/example': { proxy: 'https://example.com' },
    // '/proxy/**': { proxy: '/api/**' },
  },
  image: {
    // dir: '', // default 'public'
    // provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/demo/image/upload/fl_lossy/',
      // modifiers: {
      //   effect: 'sharpen:100',
      //   quality: 'auto:best',
      // }
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    },
    // dir: 'assets/images',
  }
})
