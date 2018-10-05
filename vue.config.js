// vue.config.js
module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pwa: {
    name: 'strizich.design',
    appleMobileWebAppStatusBarStyle: 'black',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/mstile-310x310'
    },
    themeColor: '#000000'
  }
}
