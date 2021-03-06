const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

const { src, dist } = require('./paths').paths;

const WebpackAliases = require('./paths').aliases;

const config = {
  entry: src,
  output: {
    path: dist,
    filename: 'bundle.[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              minimaze: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 version']
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: {
          loader: 'file-loader?name=images/[name].[hash:6].[ext]'
        }
      },
      {
        test: /\.(eot|eot|ttf|woff|otf)$/,
        use: {
          loader: 'file-loader?name=fonts/[name].[hash:6].[ext]'
        }
      },
      {
        test: /\.(json)$/,
        use: {
          loader: 'file-loader?name=data/[name].[hash:6].[ext]'
        }
      },
      {
        test: /\.(ico)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    alias: WebpackAliases,
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Questionnaire app',
      favicon: path.join(src, '/favicon.ico'),
      template: path.join(src, '/index.ejs'),
      version: require('../package.json').version,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'PUBLIC_URL': JSON.stringify('/questionnaire-app')
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
