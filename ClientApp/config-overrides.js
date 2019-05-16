const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');


/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    'assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    'components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    'constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
    'containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
    'global': path.resolve(__dirname, `${paths.appSrc}/global/`),
    'hoc': path.resolve(__dirname, `${paths.appSrc}/hoc/`),
    'style': path.resolve(__dirname, `${paths.appSrc}/style/`),
    'customHistory': path.resolve(__dirname, `${paths.appSrc}/customHistory`),
  })(config, env);


  return config;
}