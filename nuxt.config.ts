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
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBaseUrl: 'https://2bc9-14-161-35-142.ngrok-free.app'
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  experimental: {
    clientFallback: true,
    componentIslands: true,
  },
  routeRules: {
    '/old-page': { redirect: '/state' },
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
    provider: 'ipx',
    domains: ['nuxtjs.org'],
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  }
})
