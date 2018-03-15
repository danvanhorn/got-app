const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: {
      "/api/*": "http://localhost:6969/api/"
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: ExtractTextPlugin.extract({
                  use: ['css-loader', 'postcss-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                })
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: ['node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    port: 3000,
    noInfo: true,
    historyApiFallback: {
      index: '/dist/'
    }
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV !== 'production',
      filename: 'styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = ''
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new MinifyPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ])
}