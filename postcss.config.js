const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['>0.3%', 'not ie 11', 'not dead','not op_mini all']
    }),
    require('cssnano')
  ]
};