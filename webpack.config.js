var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './public/src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: './public/src'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};
