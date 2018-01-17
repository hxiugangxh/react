const path = require('path');
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const htmlPlugins = require('./webpack_config/html_plugn_webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./webpack_config/entry_webpack.js');

if (process.env.type == 'dev') {
  var website = {
    publicPath: 'http://localhost:1717/'
  };
} else {
  var website = {
    publicPath: 'http://localhost:1717/'
  };
}

let config = {
  devtool: 'eval-source-map',
  entry: entry.path,
  output: {
    //打包的路径文件
    path: path.resolve(__dirname, 'dist'),
    //打包的文件名称
    filename: '[name].js',
    publicPath: website.publicPath
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 使用extractTextPlugin插件的时候上面的修改成下面的
      /*{
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },*/
      {
        test: /\.(png|jpg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      //name对应入口文件中的名字，我们起的是jQuery
      name: ['jquery', 'react'],
      //把文件打包到哪里，是一个路径
      filename: 'js/[name].js',
      //最小打包的文件模块数，这里直接写2就好
      minChunks: 2
    })
    // 官方不推荐使用，他们认为css就应该打包到javaScript当中减少http的请求数
    //new extractTextPlugin('/css/index.css')
  ],
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    // host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 1717
  },
  watchOptions: {
    //检测修改的时间，以毫秒为单位
    poll: 1000,
    //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
    aggregateTimeout: 500,
    //不监听的目录
    ignored: /node_modules/
  }
};

config.plugins.push(...htmlPlugins.plugin);

module.exports = config;