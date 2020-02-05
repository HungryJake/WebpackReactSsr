/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    main: ['./src/index.js']
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:8]'
              }
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:8]'
              }
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(woff(2)?|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            query: {
              inlineRequires: '/images/'
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-with-front-matter-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new HTMLWebpackPlugin({
      template: './src/index.hbs',
      title: "Jeremy's Camp"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      WEBPACK: true
    }),
    new MinifyPlugin(),
    new UglifyJsPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/
    }),
    new BrotliPlugin({
      test: /\.js$|\.css$|\.html$/
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.sass']
  }
};
