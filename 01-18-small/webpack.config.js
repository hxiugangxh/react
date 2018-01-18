const path = require('path');
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const htmlPlugin = require('html-webpack-plugin');

if (process.env.type == 'dev') {
  var website = {
    publicPath: 'http://localhost:1717/'
  };
} else {
  var website = {
    publicPath: 'http://localhost:1717/'
  };
}

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    root: './src/root.js',
    jquery: 'jquery',
    react: ['react', 'react-dom', 'react-router-dom'],
    antd: 'antd'
  },
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
    new htmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      //name对应入口文件中的名字，我们起的是jQuery
      name: ['jquery', 'react', 'antd'],
      //把文件打包到哪里，是一个路径
      filename: 'js/[name].js',
      //最小打包的文件模块数，这里直接写2就好
      minChunks: 2
    })
  ],
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, 'src'),
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
};;