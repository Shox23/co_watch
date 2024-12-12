// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@nuxt/eslint", "@nuxt/storybook"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  storybook: {
    route: "http://localhost:6006",
    port: 6006,
  },
});
