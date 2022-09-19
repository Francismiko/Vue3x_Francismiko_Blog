const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',  //代表部署的域名访问的目录   
  outputDir: 'dist',//打包后在当前目录下生成打包后的dist文件,把dist文件放置到对应的域名/h5/下面即可
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false //去除打包后js的map文件
})