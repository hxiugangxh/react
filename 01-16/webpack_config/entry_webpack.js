//声明entry变量
const entry = {};
//声明路径属性
entry.path = {
  root: './src/root.js',
  jquery: 'jquery',
  react: ['react', 'react-dom', 'react-router-dom'],
  antd: 'antd'
};
//进行模块化
module.exports = entry;