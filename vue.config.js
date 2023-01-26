const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        // additionalData: '@import "~@/assets/scss/variables.scss"'
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: process.env.VUE_APP_TITLE,
    },
  }
})
