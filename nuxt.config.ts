const base = process.env.NUXT_APP_BASE_URL || '/'
const a = (path: string) => base.replace(/\/$/, '') + path

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    baseURL: base,
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#16181d' },
        // Concept preview: keep it out of search results
        { name: 'robots', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: a('/favicon.svg') },
        { rel: 'preload', as: 'image', type: 'image/webp', href: a('/img/truck-1280.webp'), imagesrcset: [640, 1280, 1920].map(w => `${a(`/img/truck-${w}.webp`)} ${w}w`).join(', '), imagesizes: '100vw' },
      ],
    },
  },
  routeRules: { '/**': { prerender: true } },
  experimental: { payloadExtraction: false },
})
