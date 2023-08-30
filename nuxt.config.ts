// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        charset: 'utf-8'
      },
      {
        name: 'theme-color',
        content: '#222222'
      }
    ]
  },
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
})
