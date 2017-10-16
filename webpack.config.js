const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/behaviour.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'polyfill.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
