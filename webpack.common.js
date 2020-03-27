/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var path = require('path');

module.exports = {
  entry: {
    cv: './src/cv.js',
    tv: './src/tv.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.html$/i,
        use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
      },
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};