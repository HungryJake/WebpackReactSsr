/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  name: "client",
  entry: {
    vendor: ["react", "react-dom"],
    main: [
      "react-hot-loader/patch",
      "babel-runtime/regenerator",
      "webpack-hot-middleware/client?reload=true",
      "./src/main.js"
    ]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: "react-hot-loader/webpack",
        include: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:8]"
              }
            }
          },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(woff(2)?|ttf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              inlineRequires: "/images/"
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-with-front-matter-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks({ hot: true }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        WEBPACK: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx", ".sass"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
};
