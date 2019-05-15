const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'element-00A1B7': path.resolve(__dirname, "src/element-00A1B7/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: ""
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              fiber: require('fibers')
            }
          }
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {}
      }
    ]
  }
};
