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
      apiBaseUrl: process.env.API_BASE_URL
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
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  experimental: {
    clientFallback: true,
    componentIslands: true,
  },
  routeRules: {
    '/old-page': { redirect: '/state' }
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
