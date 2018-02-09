const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
  config = injectBabelPlugin(['babel-plugin-react-html-attrs'], config);
  config = rewireLess.withLoaderOptions({
    /*modifyVars: {'@primary-color': '#f40'}*/
  })(config, env);
  return config;
};