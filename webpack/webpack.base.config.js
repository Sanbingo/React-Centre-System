const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname, '..')
const BUILD_PATH = path.resolve(__dirname, '../build')

module.exports = {
  entry: {
    index: path.resolve(ROOT_PATH, './client/index.js')
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(BUILD_PATH)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, 'index.html')
    })
  ]
}