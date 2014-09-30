/* jshint node:true */
'use strict';

module.exports = {
  entry: './client/main.jsx',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,           loader: 'jsx-loader?harmony'                    },
      { test: /\.styl$/,          loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'                 }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', 'index.jsx', '.styl']
  }
};

