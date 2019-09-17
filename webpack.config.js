const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = {}) => {

  const entry = {
    'element-00A1B7': path.resolve(__dirname, "src/element-00A1B7/main.js"),
    'element-rj-ivg': path.resolve(__dirname, "src/element-rj-ivg/main.js"),
    'element-rj-00aeff': path.resolve(__dirname, "src/rj-themes/00aeff.js"),
    'element-rj-12c2ab': path.resolve(__dirname, "src/rj-themes/12c2ab.js"),
    'element-rj-0090ff': path.resolve(__dirname, "src/rj-themes/0090ff.js"),
    'element-rj-232a45': path.resolve(__dirname, "src/rj-themes/232a45.js"),
  }

  env.SINGLE_ENTRY && Object.keys(entry).map(name => {
    if (name !== env.SINGLE_ENTRY) delete entry[name]
  })

  const multiHtmlPlugins = (env.NODE_ENV === 'production') ? [] : Object.keys(entry).map((name, index) => {
    return new HtmlWebpackPlugin({
      chunks: [name],
      template: `html/${name}.html`,
      filename: index ? `${name}.html` : 'index.html'
    })
  })

  return {
    entry,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      publicPath: ""
    },
    plugins: [
      ...(env.NODE_ENV === 'production' ? [new CleanWebpackPlugin()] : []),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      ...multiHtmlPlugins,
    ],
    module: {
      rules: [{
          test: /\.js$/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
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
        // Nested @font-face results in invalid syntax
        // https://github.com/sass/sass/issues/1251
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {}
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 20000,
          }
        },
      ]
    }
  }
}