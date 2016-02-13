var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve('../grails-app/assets/javascripts');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/comm/assets/'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [nodeModulesPath]
    },
    {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
    {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
  ]
  }
};
