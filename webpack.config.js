/**
 * Created by jwqin on 10/20/15.
 */
module.exports = {
  entry: './names-manager.jsx',
  output: {
    filename: './site/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
};