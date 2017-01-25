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
          loaders: {
            'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader',
          }
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
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
};
