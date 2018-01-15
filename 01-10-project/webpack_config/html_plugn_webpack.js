const htmlPlugin = require('html-webpack-plugin');
const htmlPlugins = {};
htmlPlugins.plugin = [
  new htmlPlugin({
    minify: {
      removeAttributeQuotes: true
    },
    hash: true,
    filename: 'index.html',
    template: './src/index.html'
  }),
  new htmlPlugin({
    minify: {
      removeAttributeQuotes: true
    },
    hash: true,
    filename: './html/index.html',
    template: './src/html/index.html'
  })
];
//进行模块化
module.exports = htmlPlugins;