/* jshint node:true */
'use strict';

var webpack = require("webpack");

module.exports = {
    entry: './client/js/main.jsx',
    output: {
        path: './client',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
            {test: /\.css$/, loader: 'css-loader'},
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', 'index.jsx', '.styl']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        })
    ],
    devtool: "#source-map"
};

