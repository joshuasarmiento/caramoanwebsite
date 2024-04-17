// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image"
  ],

  css: [
    "~/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  
  googleFonts: {
    families: {
      Montserrat: true,
      'Island+Moments': true
    }
  }
})