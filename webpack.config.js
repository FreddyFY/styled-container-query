const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin/dist/clean-webpack-plugin')

module.exports = () => ({
  devtool: 'source-map',
  entry: './examples/src/index.js',
  output: {
    path: path.resolve(__dirname, './examples/build'),
    publicPath: '',
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].chunk.js',
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './examples/public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
})
