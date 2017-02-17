var path = require('path');
var webpack = require("webpack");

/**
 * Установить style-loader, css-loader, jq, html-loader
 * @type {{entry: string, output: {filename: string, path: *}, module: {rules: {test: RegExp, use: {loader: string}[]}[]}, plugins: *[]}}
 */

module.exports = {
   entry: './app/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test: /\.css$/,
         use: [{
            loader: 'style-loader'
         }, {
            loader: 'css-loader'
         }]
      },{
         test: /\.html$/,
         use: [{
            loader: "html-loader"
         }]
      }]
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
      })
   ]
};