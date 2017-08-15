// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// 每个环境的包路径不一样
const HOST_CONF = require('./host-conf').HOST_CONF

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist', HOST_CONF.dirName, 'index.html'), //modify
    assetsRoot: path.resolve(__dirname, '../dist', HOST_CONF.dirName), // modify
    assetsSubDirectory: 'static',
    // 这里可改成了相对路径，建议用绝对路径
    // assetsPublicPath: '',
    // 指定静态资源打包的路径,未指定则为相对路径
    assetsPublicPath: HOST_CONF.assetHostname === undefined?'': HOST_CONF.assetHostname + '/', //modify
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
