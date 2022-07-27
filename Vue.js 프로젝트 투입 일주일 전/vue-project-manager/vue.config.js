/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})
*/
module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
