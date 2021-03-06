let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  resolve: {//指定可以被import的文件名后缀
    extensions: ['.js', '.jsx', '.sass', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs'] // 添加插件，解决class(className)不执行的情况
        } //将react编译成js文件
      },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
      //打包css文件
      {test: /\.scss$/, loader: 'style-loader!css!sass?sourceMap'},
      //编译sass文件
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
      //对图片进行打包
    ]
  },
  //4、服务器依赖包配置
  devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
    contentBase: './src',//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
};