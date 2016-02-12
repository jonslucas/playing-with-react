/*jshint strict:implied*/
/* globals module */
module.exports = {
  entry: ['./client/js/client.js'],
  output: {
      path: './dist',
      filename: 'bundle.js',
      publicPath: '/'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ]
  }
};